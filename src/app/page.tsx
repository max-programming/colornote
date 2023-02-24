// import Greet from '@/components/Greet';
import { PlusIcon } from '@heroicons/react/24/outline';
import NotesDisplay from '@/components/Notes';
import Link from 'next/link';
import { getXataClient } from '@/xata';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { Session } from 'next-auth';

async function getAllNotes(session: Session) {
  const client = getXataClient();
  const notes = await client.db.notes
    .filter({ 'userId.email': session.user?.email })
    .sort('createdAt', 'desc')
    .getAll();
  return notes;
}

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) return <div></div>;
  const notes = await getAllNotes(session);

  return (
    <>
      <h1 className='text-4xl font-bold'>Colornote</h1>
      <div className='flex flex-wrap flex-col w-full'>
        <Link href='/new' className='self-end'>
          <button className='btn btn-info mt-10 flex items-center gap-1'>
            <PlusIcon className='w-6 h-6' /> Create Note
          </button>
        </Link>
        {/* <Greet /> */}
        <NotesDisplay notes={notes} />
      </div>
    </>
  );
}
