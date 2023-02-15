import { XataClient } from '@/xata';
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { z } from 'zod';
import { authOptions } from '../auth/[...nextauth]';

const client = new XataClient();

const createNoteSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
  color: z.enum(['yellow', 'blue', 'green', 'red']),
});

export default async function createNote(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) return res.status(400);

  const createNoteData = createNoteSchema.safeParse(req.body);

  if (createNoteData.success) {
    const newNote = await client.db.notes.create({
      userId: session.user.id,
      ...createNoteData.data,
    });
    return res.json({ success: true, newNote });
  }

  return res.status(500).json({ success: false, newNote: null });
}
