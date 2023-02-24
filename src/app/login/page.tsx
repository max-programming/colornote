'use client';

import { FormEvent, useEffect, useState } from 'react';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { toast, Toaster } from 'react-hot-toast';

export default function Login() {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let initialized = false;

  useEffect(() => {
    if (!initialized) {
      initialized = true;
      if (!searchParams) return;
      if (searchParams.get('error') === 'CredentialsSignin') {
        console.log('hi');
        toast.error('Invalid credentials');
      }
    }
  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    await signIn('credentials', { email, password, callbackUrl: '/' });
    setIsLoading(false);
  }

  return (
    <>
      <Toaster />
      <div className='my-5 card w-full bg-base-200 shadow-xl p-10'>
        <h1 className='text-4xl font-bold text-center mb-10'>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col items-center justify-center gap-5'>
            <input
              type='email'
              placeholder='Your email'
              className='input input-bordered input-primary w-full max-w-xs'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              type='password'
              placeholder='Your password'
              className='input input-bordered input-primary w-full max-w-xs'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <button
              type='submit'
              className={`btn btn-primary ${isLoading ? 'loading' : ''}`}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
