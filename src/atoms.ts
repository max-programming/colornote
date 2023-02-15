import { NoteColor } from './constants';
import { atomWithStorage } from 'jotai/utils';
import { atom } from 'jotai';

export const colorAtom = atomWithStorage<NoteColor>('color', 'green');
export const titleAtom = atomWithStorage('title', '');
export const contentAtom = atomWithStorage('content', '');

export const noteAtom = atom(
  get => ({
    color: get(colorAtom),
    title: get(titleAtom),
    content: get(contentAtom),
  }),
  (get, set, { color, title, content }) => {
    set(colorAtom, color);
    set(titleAtom, title);
    set(contentAtom, content);
  }
);
