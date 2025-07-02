import type { VercelRequest, VercelResponse } from '@vercel/node';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI!;
const client = new MongoClient(uri);
const dbName = 'abidan-archive'; // replace this

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, address, attendees, pin, surname } = req.body;

  if (!email || !address || attendees == null || !pin || !surname) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    await client.connect();
    const db = client.db(dbName);
    const guests = db.collection('w25');

    const result = await guests.updateOne(
      {
        guest_pin: pin.toLowerCase(),
        surname: { $regex: `^${surname}$`, $options: 'i' },
      },
      {
        $set: {
          attendees,
          'addresses.email': email,
          'addresses.mailing': address,
        },
      }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({ error: 'Guest not found for update' });
    }

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
}
