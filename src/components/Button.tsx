import { MouseEventHandler, ReactNode } from 'react';

import { ButtonStyleType } from '@/types/ButtonStyleType';

interface ButtonProps {
  children?: ReactNode;
  style: ButtonStyleType;
  name?: string;
  value?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | (() => void);
}
const tw = {
  primary:
    'bg-gray-100 hover:bg-gray-200 ring-1 ring-black dark:bg-slate-900 dark:hover:bg-gray-800 dark:text-white dark:ring-cyan-900 px-3 py-2.5 rounded-full',
  search:
    'bg-green-200 hover:bg-green-300 ring-1 ring-green-700 dark:bg-green-950 dark:hover:bg-green-900 dark:text-green-400 dark:ring-green-400 px-2 py-2.5 rounded-r-full',
  green:
    'bg-green-200 hover:bg-green-300 ring-1 ring-green-700 dark:bg-green-950 dark:hover:bg-green-900 dark:text-green-400 dark:ring-green-400 px-3 py-2 rounded-full',
  red: 'bg-red-200 hover:bg-red-300 ring-1 ring-red-700 dark:bg-red-950 dark:hover:bg-red-900 dark:text-red-400 dark:ring-red-400 px-3 py-2 rounded-full',
  cyan: 'bg-cyan-200 hover:bg-cyan-300 ring-1 ring-cyan-700 dark:bg-cyan-950 dark:hover:bg-cyan-900 dark:text-cyan-400 dark:ring-cyan-400 px-3 py-2 rounded-full',
  d_primary:
    'bg-gray-100 hover:bg-gray-200 ring-1 ring-black dark:bg-slate-900 dark:hover:bg-gray-800 dark:text-white dark:ring-cyan-900 px-3 py-2 rounded-full',
  d_open:
    'bg-red-200 hover:bg-red-300 ring-1 ring-red-700 dark:bg-red-950 dark:hover:bg-red-900 dark:text-red-400 dark:ring-red-400 dark:ring-green-400 px-2 py-2 rounded-full absolute top-0 right-0',
  d_closed:
    'bg-green-200 hover:bg-green-300 ring-1 ring-green-700 dark:bg-green-950 dark:hover:bg-green-900 dark:text-green-400 dark:ring-green-400 px-2 py-2 rounded-full absolute top-0 right-0',
};

function Button({ children, style, name, value, onClick }: ButtonProps) {
  return (
    <button
      className={`${tw[style]}`}
      onClick={onClick}
      name={name}
      value={value}
    >
      {children}
    </button>
  );
}

export default Button;
