'use client';

import { CloudArrowUpIcon } from '@heroicons/react/24/outline';
import { MouseEventHandler } from 'react';

export default function AddButton({
  onClick,
  isLoading,
}: {
  onClick: MouseEventHandler;
  isLoading: boolean;
}) {
  return (
    <div className='flex mt-10 justify-center items-center gap-10'>
      <button
        className={`btn btn-secondary w-full flex text-xl items-center gap-3 ${
          isLoading && 'loading'
        }`}
        onClick={onClick}
      >
        {!isLoading && <CloudArrowUpIcon className='w-7 h-7' />}
        Save
      </button>
    </div>
  );
}
