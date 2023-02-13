import Greet from '@/components/Greet';
import NotesDisplay from '@/components/Notes';

export default function Home() {
  return (
    <div className='container mx-auto mt-5'>
      <h1 className='text-4xl font-bold'>Colornote</h1>
      <Greet />
      <NotesDisplay />
    </div>
  );
}
