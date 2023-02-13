import { XataClient } from '@/xata';
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';

const client = new XataClient();

export default async function getNotes(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) return res.status(400);

  const notes = await client.db.notes
    .filter({ 'userId.email': session.user?.email })
    .getAll();

  res.json(notes);
}
