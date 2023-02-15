'use client';

import { noteAtom, titleAtom } from '@/atoms';
import { colorVariants } from '@/constants';
import { SwatchIcon } from '@heroicons/react/24/outline';
import { useAtomValue, useSetAtom } from 'jotai';
import { createPortal } from 'react-dom';
import ColorModal from './ColorModal';

export default function Title() {
  const { color, title } = useAtomValue(noteAtom);
  const setTitle = useSetAtom(titleAtom);

  const inputBorder = {
    yellow: 'input-warning',
    blue: 'input-info',
    green: 'input-success',
    red: 'input-error',
  };

  return (
    <div className='flex justify-center items-center gap-10'>
      <input
        type='text'
        placeholder='Title goes here'
        className={`input input-bordered ${inputBorder[color]} text-3xl input-lg w-full`}
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <label
        htmlFor='color'
        className={`cursor-pointer w-16 h-16 rounded-md flex justify-center items-center ${colorVariants[color]}`}
      >
        <SwatchIcon
          className={`w-8 h-8 ${
            color === 'red' ? 'text-white' : 'text-primary-content'
          }`}
        />
      </label>
      {createPortal(<ColorModal />, document.body)}
    </div>
  );
}
