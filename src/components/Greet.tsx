'use client';
import { useSession } from 'next-auth/react';

export default function Greet() {
  const session = useSession();

  return <div>{session.data && <p>Hi {session.data.user?.name}</p>}</div>;
}
