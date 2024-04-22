import { MongoClient } from 'mongodb';
import { regexEmail } from '@/constants';

export async function POST(req, { params: { eventId } }) {
  const body = await req.json();
  const { email, name, comment } = body;

  if (!regexEmail.test(email) || !name || !comment) {
    return Response.json({ message: 'Invalid data' }, { status: 422 });
  }

  const newComment = {
    eventId,
    ...body,
  };

  try {
    const client = await MongoClient.connect(process.env.DB_URL);
    const db = client.db('events');
    const result = await db.collection('comments').insertOne({ ...newComment });

    client.close();

    return Response.json(
      { message: 'Comment was added', id: result.insertedId },
      { status: 201 },
    );
  } catch (error) {
    return Response.json({ message: error.message }, { status: 500 });
  }
}

export async function GET(req, { params: { eventId } }) {
  try {
    const client = await MongoClient.connect(process.env.DB_URL);
    const db = client.db('events');
    const comments = await db
      .collection('comments')
      .find({ eventId })
      .sort({ _id: -1 })
      .toArray();

    client.close();

    return Response.json({ comments }, { status: 200 });
  } catch (error) {
    return Response.json({ message: error.message }, { status: 500 });
  }
}
