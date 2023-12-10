import Image from 'next/image';
import { PadType } from '@/types/PadType';
import map from '../../public/map.svg';
import Button from '@/components/Button';
import { MouseEventHandler } from 'react';

type PadDetailsProps = {
  pad: PadType | null;
  onFilterChange: MouseEventHandler<HTMLButtonElement>;
};

function PadDetails({ pad, onFilterChange }: PadDetailsProps) {
  return pad?.id !== undefined ? (
    <>
      <li className="mt-2 flex items-center gap-2">
        Launch Pad:
        <Button
          style={'d_primary'}
          onClick={onFilterChange}
          name="pad"
          value={pad.id.toString()}
        >
          {pad.name}
        </Button>
      </li>

      <li className="text-black dark:text-white mt-2">
        Location:{' '}
        <span className="font-light text-gray-700 dark:text-gray-400">
          {pad.location.name ?? ''}
        </span>
      </li>

      <Image
        src={pad.location.map_image ?? map}
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        className="mt-2 rounded-t xl:rounded w-full h-auto ring-1 ring-black dark:ring-cyan-900"
      />
    </>
  ) : (
    <li className="mt-2 dark:text-red-300 font-semibold text-red-700">
      {' '}
      No pad description found
    </li>
  );
}

export default PadDetails;
