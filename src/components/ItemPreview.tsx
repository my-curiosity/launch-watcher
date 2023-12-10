import { LaunchType } from '@/types/LaunchType';
import { useMediaQuery } from 'react-responsive';

type ItemPreviewProps = {
  launch: LaunchType;
};

function ItemPreview({ launch }: ItemPreviewProps) {
  const sm = useMediaQuery({
    query: '(min-width: 640px)', // = tailwind sm modifier
  });

  return launch.status !== null ? (
    <>
      <ul className="flex flex-wrap text-m">
        <li
          className={`${
            launch.status.id === 3
              ? 'dark:text-green-400 text-green-700'
              : launch.status.id === 4 || launch.status.id === 7
              ? 'dark:text-red-400 text-red-700'
              : 'text-black dark:text-white'
          } mr-2`}
        >
          {launch.status.abbrev}
        </li>
        <li className="text-black dark:text-white">
          {sm ? launch.net : launch.net?.substring(0, 10)}
        </li>
        <li className="max-[400px]:hidden flex items-center text-black dark:text-white">
          <svg
            width="3"
            height="3"
            className={`${
              launch.pad?.location.country_code ? '' : 'hidden'
            } mx-2 dark:text-cyan-300 fill-black dark:fill-cyan-300`}
            aria-hidden="true"
          >
            <circle cx="1" cy="1" r="1" />
          </svg>
          {launch.pad?.location.country_code}
        </li>
        <li className="max-md:hidden flex items-center text-black dark:text-white">
          <svg
            width="3"
            height="3"
            className={`${
              launch.launch_service_provider?.name ? '' : 'hidden'
            } mx-2 dark:text-cyan-300 fill-black dark:fill-cyan-300`}
            aria-hidden="true"
          >
            <circle cx="1" cy="1" r="1" />
          </svg>
          {launch.launch_service_provider?.name}
        </li>
      </ul>
    </>
  ) : null;
}

export default ItemPreview;
