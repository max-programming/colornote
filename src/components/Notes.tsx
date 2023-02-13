'use client';

import useSWR from 'swr';
import { Notes } from '@/xata';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function NotesDisplay() {
  const { data: notes } = useSWR<Notes[]>('/api/notes/get', fetcher);

  return (
    <div className='mt-10'>
      {!notes ? (
        <p>loading...</p>
      ) : (
        <div className='grid grid-cols-4 gap-16'>
          {notes.map(note => (
            <SingleNote note={note} key={note.id} />
          ))}
        </div>
      )}
    </div>
  );
}

function SingleNote({ note }: { note: Notes }) {
  return (
    <div
      className={`card w-96 bg-${note.color} ${
        note.color === 'red' ? 'text-white' : 'text-primary-content'
      }`}
    >
      <div className='card-body'>
        <h2 className='card-title'>{note.title}</h2>
        <p>{note.content.slice(0, 15)}</p>
        <div className='card-actions justify-end'>
          <button className='btn'>Read</button>
        </div>
      </div>
    </div>
  );
}
