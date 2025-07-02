import type { VercelRequest, VercelResponse } from '@vercel/node';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI!;
const client = new MongoClient(uri);
const dbName = 'abidan-archive'; // Replace this
const collectionName = 'w25'; // Replace this if different

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { pin, surname } = req.body;

  if (!pin || !surname) {
    return res.status(400).json({ error: 'Missing pin or surname' });
  }

  try {
    await client.connect();
    const db = client.db(dbName);
    const guests = db.collection(collectionName);

    const guest = await guests.findOne({
      guest_pin: pin.toLowerCase(),
      surname: { $regex: `^${surname}$`, $options: 'i' },
    });

    if (!guest) {
      return res.status(404).json({ error: 'Guest not found' });
    }

    res.status(200).json({
      email: guest.addresses?.email || '',
      address: guest.addresses?.mailing || '',
      allotment: guest.guest_allotment || 1,
      attendees: guest.attendees || 0,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
}
