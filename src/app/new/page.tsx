'use client';

import { noteAtom } from '@/atoms';
import AddButton from '@/components/CreateNote/AddButton';
import Content from '@/components/CreateNote/Content';
import Title from '@/components/CreateNote/Title';
import axios from 'axios';
import { useAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function NewPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [note, setNote] = useAtom(noteAtom);

  async function handleSave() {
    try {
      setIsLoading(true);
      const { data } = await axios.post('/api/notes/create', note);
      if (!data.success) {
        toast.error('Could not create todo...');
      } else {
        router.push('/');
        setNote({ color: 'yellow', content: '', title: '' });
      }
    } catch (e) {
      toast.error('Could not create todo...');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className='max-w-5xl mx-auto'>
      <Title />
      <Content />
      <AddButton isLoading={isLoading} onClick={handleSave} />
      <Toaster />
    </div>
  );
}
