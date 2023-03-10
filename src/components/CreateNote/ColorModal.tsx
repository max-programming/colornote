'use client';

import { colorAtom } from '@/atoms';
import { borderVariants, bgColorVariants, NoteColor } from '@/constants';
import { useSetAtom } from 'jotai/react';

export default function ColorModal() {
  const setColor = useSetAtom(colorAtom);

  return (
    <div id='colorModal'>
      <input type='checkbox' id='color' className='modal-toggle' />

      <label htmlFor='color' className='modal'>
        <label htmlFor='' className='modal-box'>
          <h3 className='font-bold text-4xl text-center'>Choose a color</h3>
          <div className='grid grid-cols-2 place-items-center mt-10 gap-10'>
            {(['yellow', 'blue', 'red', 'green'] as NoteColor[]).map(color => (
              <ColorChoice
                color={color}
                key={color}
                changeColor={(color: NoteColor) => setColor(color)}
              />
            ))}
          </div>
          <div className='modal-action'>
            <label htmlFor='color' className='btn'>
              Done
            </label>
          </div>
        </label>
      </label>
    </div>
  );
}

function ColorChoice({
  color,
  changeColor,
}: {
  color: NoteColor;
  changeColor: (color: NoteColor) => void;
}) {
  return (
    <div
      className={`w-44 cursor-pointer h-44 border-8 ${borderVariants[color]} ${bgColorVariants[color]} rounded-md`}
      onClick={() => changeColor(color)}
    ></div>
  );
}
