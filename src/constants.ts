const colors = ['yellow', 'blue', 'red', 'green'] as const;
export type NoteColor = typeof colors[number];

export const colorVariants: { [key in NoteColor]: string } = {
  yellow: `text-dracula-yellow`,
  red: `text-dracula-red`,
  blue: `text-dracula-blue`,
  green: `text-dracula-green`,
};

export const bgColorVariants: { [key in NoteColor]: string } = {
  yellow: `bg-dracula-yellow`,
  red: `bg-dracula-red`,
  blue: `bg-dracula-blue`,
  green: `bg-dracula-green`,
};

export const borderVariants: { [key in NoteColor]: string } = {
  yellow: `border-dracula-yellow`,
  red: `border-dracula-red`,
  blue: `border-dracula-blue`,
  green: `border-dracula-green`,
};
