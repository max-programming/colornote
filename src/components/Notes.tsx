'use client';

import { Notes, NotesRecord } from '@/xata';
import { bgColorVariants, NoteColor } from '@/constants';
import Link from 'next/link';
import { SelectedPick } from '@xata.io/client';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function NotesDisplay({
  notes,
}: {
  notes: Readonly<SelectedPick<NotesRecord, ['*']>>[];
}) {
  // const { data: notes } = useSWR<Notes[]>('/api/notes/get', fetcher);

  return (
    <div className='mt-10'>
      {!notes ? (
        <p>loading...</p>
      ) : (
        <div className='grid grid-cols-4 gap-10'>
          {notes.map(note => (
            <Link href={`/note/${note.id}`} key={note.id}>
              <SingleNote note={note} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function SingleNote({ note }: { note: Notes }) {
  return (
    <div
      className={`card ${bgColorVariants[note.color as NoteColor]} ${
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
