'use client';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Navbar() {
  const session = useSession();

  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1'>
        <Link href='/' className='btn btn-ghost normal-case text-xl'>
          Colornote
        </Link>
      </div>
      {!!session.data ? (
        <div className='flex-none gap-2'>
          <div className='dropdown dropdown-end'>
            <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
              <div className='w-10 rounded-full'>
                <img src={session.data.user?.image!} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className='mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52'
            >
              <li>
                <a className='justify-between'>
                  Profile
                  <span className='badge'>New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li onClick={() => signOut({ callbackUrl: '/login' })}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className='navbar-end gap-5'>
          <Link href='/login' className='btn'>
            Login
          </Link>
          <Link href='/register' className='btn btn-primary'>
            Get started
          </Link>
        </div>
      )}
    </div>
  );
}
