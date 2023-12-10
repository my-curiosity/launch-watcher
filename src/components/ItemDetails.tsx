import Image from 'next/image';
import { LaunchType } from '@/types/LaunchType';
import StatusDetails from '@/components/StatusDetails';
import RocketDetails from '@/components/RocketDetails';
import PadDetails from '@/components/PadDetails';
import rocket from '../../public/rocket.svg';
import { MouseEventHandler } from 'react';
import MissionDetails from '@/components/MissionDetails';
import ProviderDetails from '@/components/ProviderDetails';
import WindowDetails from '@/components/WindowDetails';

type ItemDetailsProps = {
  launch: LaunchType;
  onFilterChange: MouseEventHandler<HTMLButtonElement>;
};

function ItemDetails({ launch, onFilterChange }: ItemDetailsProps) {
  return (
    <div className="flex flex-wrap mt-2">
      <ul className="xl:w-1/2 w-full xl:pr-3 text-m">
        <StatusDetails status={launch.status} onFilterChange={onFilterChange} />
        <WindowDetails start={launch.window_start} end={launch.window_end} />
        <ProviderDetails provider={launch.launch_service_provider} />
        <RocketDetails rocket={launch.rocket} onFilterChange={onFilterChange} />
        <MissionDetails mission={launch.mission} />
        <PadDetails pad={launch.pad} onFilterChange={onFilterChange} />
      </ul>

      <Image
        src={launch.image ?? rocket}
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        className={`bg-gray-100 ring-1 ring-black dark:bg-gray-900 dark:text-white dark:ring-cyan-900 ${
          launch.image ? 'object-cover' : ''
        } xl:w-1/2 w-full h-auto rounded-b xl:rounded`}
      />
    </div>
  );
}

export default ItemDetails;
