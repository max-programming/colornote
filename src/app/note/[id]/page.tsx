import { notFound } from 'next/navigation';
import { getXataClient } from '@/xata';
import { colorVariants, NoteColor } from '@/constants';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

interface Params {
  id: string;
}

async function getSingleNote(params: Params) {
  if (!params.id) return;
  const xata = getXataClient();
  const rec = await xata.db.notes.read(params.id);
  // await new Promise(r => setTimeout(r, 5000));
  return rec;
}

export default async function Page({ params }: { params: Params }) {
  const session = await getServerSession(authOptions);
  if (!session) notFound();
  const note = await getSingleNote(params);
  if (!note) notFound();
  return note ? (
    <div className='flex gap-5 flex-col'>
      <h2
        className={`text-3xl font-bold text-center ${
          colorVariants[note.color as NoteColor]
        }`}
      >
        {note.title}
      </h2>
      <pre className='font-sans text-xl whitespace-pre-line'>
        {note.content}
      </pre>
    </div>
  ) : (
    <p>not found</p>
  );
}
