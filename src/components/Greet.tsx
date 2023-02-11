'use client';
import { useSession } from 'next-auth/react';

export default function Greet() {
  const session = useSession();

  return (
    <div>
      <p>{session.status}</p>
      <p>{session.data && session.data.user?.email}</p>
    </div>
  );
}
