import { RocketType } from '@/types/RocketType';
import { MouseEventHandler } from 'react';
import Button from '@/components/Button';

type RocketDetailsProps = {
  rocket: RocketType | null;
  onFilterChange: MouseEventHandler<HTMLButtonElement>;
};

function RocketDetails({ rocket, onFilterChange }: RocketDetailsProps) {
  return rocket?.configuration?.id !== undefined ? (
    <li className="mt-2 flex items-center gap-2">
      Rocket Configuration:
      <Button
        style={'d_primary'}
        onClick={onFilterChange}
        name="rocket"
        value={rocket.configuration.id.toString()}
      >
        {rocket.configuration.full_name ?? rocket.configuration.id.toString()}
      </Button>
    </li>
  ) : (
    <li className="mt-2 dark:text-red-300 font-semibold text-red-700">
      {' '}
      No rocket description found
    </li>
  );
}

export default RocketDetails;
