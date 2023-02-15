'use client';

import { contentAtom, noteAtom } from '@/atoms';
import { useAtomValue, useSetAtom } from 'jotai';

export default function Content() {
  const { color, content } = useAtomValue(noteAtom);
  const setContent = useSetAtom(contentAtom);

  const textareaBorder = {
    yellow: 'textarea-warning',
    blue: 'textarea-info',
    green: 'textarea-success',
    red: 'textarea-error',
  };

  return (
    <div className='mt-10 flex justify-center h-[60vh]'>
      <textarea
        placeholder='Write down the note in here'
        className={`textarea ${textareaBorder[color]} w-full text-2xl p-5`}
        value={content}
        onChange={e => setContent(e.target.value)}
      />
    </div>
  );
}
