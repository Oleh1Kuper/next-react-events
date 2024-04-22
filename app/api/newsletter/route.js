import { MongoClient } from 'mongodb';
import { regexEmail } from '@/constants';

export async function POST(req) {
  const body = await req.json();

  if (!regexEmail.test(body.email)) {
    return Response.json({ message: 'Invalid email' }, { status: 422 });
  }

  try {
    const client = await MongoClient.connect(process.env.DB_URL);
    const db = client.db('events');

    await db.collection('emails').insertOne({ email: body.email });
    client.close();

    return Response.json({ message: 'Signed up!' }, { status: 201 });
  } catch (error) {
    Response.json({ message: error.message }, { status: 500 });
  }
}
