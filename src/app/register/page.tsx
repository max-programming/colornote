'use client';

import { FormEvent, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Register() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setIsLoading(true);
    const res = await axios.post('/api/auth/register', {
      email,
      name,
      password,
    });
    setIsLoading(false);
    if ('user' in res.data) {
      router.push('/login');
    }
  }

  return (
    <>
      <div className='my-5 card w-full bg-base-200 shadow-xl p-10'>
        <h1 className='text-4xl font-bold text-center mb-10'>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col items-center justify-center gap-5'>
            <input
              type='text'
              placeholder='Your name'
              className='input input-bordered input-primary w-full max-w-xs'
              value={name}
              onChange={e => setName(e.target.value)}
            />
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
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
