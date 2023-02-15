import { NoteColor } from './constants';
import { atomWithStorage } from 'jotai/utils';

interface Note {
  color: NoteColor;
  title: string;
  content: string;
}

export const noteAtom = atomWithStorage<Note>('note', {
  color: 'yellow',
  title: '',
  content: '',
});
