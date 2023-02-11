import Greet from '@/components/Greet';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='container mx-auto mt-5'>
      <h1 className='text-4xl font-bold'>Colornote</h1>
      <Link href='/register'>Register</Link>
      <Link href='/login'>Login</Link>
      <Greet />
    </div>
  );
}
