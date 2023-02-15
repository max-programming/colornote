// import Greet from '@/components/Greet';
import { PlusIcon } from '@heroicons/react/24/outline';
import NotesDisplay from '@/components/Notes';
import Link from 'next/link';

export default function Home() {
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
        <NotesDisplay />
      </div>
    </>
  );
}
