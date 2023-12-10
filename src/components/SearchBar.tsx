import { FormEventHandler } from 'react';
import Button from '@/components/Button';

type SeachBarProps = {
  onSearchTextChange: FormEventHandler<HTMLFormElement>;
};

function SearchBar({ onSearchTextChange }: SeachBarProps) {
  return (
    <form onSubmit={onSearchTextChange} className="flex flex-nowrap">
      <input
        type="text"
        name="text"
        className="w-40 bg-gray-100 hover:bg-gray-200 ring-1 ring-black dark:bg-slate-900 dark:hover:bg-gray-800 dark:text-white dark:ring-cyan-900 px-3 py-2.5 rounded-l-full focus:outline-none"
        placeholder="Search:"
      />
      <Button style="search">Apply</Button>
    </form>
  );
}

export default SearchBar;
