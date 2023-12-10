type WindowDetailsProps = {
  start: string | null;
  end: string | null;
};

function WindowDetails({ start, end }: WindowDetailsProps) {
  return (
    <>
      <li className="mt-2 text-black dark:text-white">
        Window Start:{' '}
        <span className="font-light text-gray-700 dark:text-gray-400">
          {start ?? 'unknown'}
        </span>
      </li>
      <li className="text-black dark:text-white">
        Window End:{' '}
        <span className="font-light text-gray-700 dark:text-gray-400">
          {end ?? 'unknown'}
        </span>
      </li>
    </>
  );
}

export default WindowDetails;
