import type { VercelRequest, VercelResponse } from '@vercel/node';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI!;
const client = new MongoClient(uri);
const dbName = 'abidan-archive';
const collectionName = 'w25';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    await client.connect();
    const db = client.db(dbName);
    const guests = db.collection(collectionName);

    const allGuests = await guests.find().toArray();

    const totalAttendees = allGuests.reduce((sum, guest) => sum + (guest.attendees || 0), 0);
    const totalAllotted = allGuests.reduce((sum, guest) => sum + (guest.guest_allotment || 0), 0);

    const attendingGuests = allGuests
      .filter(guest => (guest.attendees || 0) > 0)
      .map(guest => ({
        surname: guest.surname,
        attendees: guest.attendees,
        allotment: guest.guest_allotment,
        pin: guest.guest_pin
      }));

    res.status(200).json({
      totalAttendees,
      totalAllotted,
      attendingGuests
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
}
