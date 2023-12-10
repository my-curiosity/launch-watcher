import { API_URL } from '@/lib/Constants';

type APICheckerProps = {
  status: 'ok' | 'wait' | 'empty' | 'error' | 'throttle';
};

function APIChecker({ status }: APICheckerProps) {
  return (
    <section
      className={`h-11 rounded-full flex items-center bg-gray-100 ring-1 ring-black dark:bg-slate-900 dark:text-white dark:ring-cyan-900 px-3 py-2 rounded`}
    >
      <svg
        className={`${
          status === 'ok'
            ? 'fill-green-400 shadow-[0_0_10px_0_rgba(0,255,0,1)]'
            : status === 'wait'
            ? 'fill-yellow-400 shadow-[0_0_10px_0_rgba(255,255,0,1)]'
            : status === 'error' || status === 'empty'
            ? 'fill-red-400 shadow-[0_0_10px_0_rgba(255,0,0,1)]'
            : 'fill-purple-400 shadow-[0_0_10px_0_rgba(255,0,255,1)]'
        } mr-3 rounded-full w-4 h-4`}
      >
        <circle cx="9" cy="9" r="10" />
      </svg>
      <label className="text-m dark:text-white text-black">
        {API_URL.includes('lldev') ? '[lldev]\t' : '[ll]\t'}
        {status === 'ok'
          ? 'Ready'
          : status === 'wait'
          ? 'Connecting...'
          : status === 'empty'
          ? 'No results'
          : status === 'error'
          ? 'Error'
          : 'Rate-limited'}
      </label>
    </section>
  );
}

export default APIChecker;
