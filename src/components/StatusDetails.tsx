import { StatusType } from '@/types/StatusType';
import { MouseEventHandler } from 'react';
import Button from '@/components/Button';
import { useMediaQuery } from 'react-responsive';

type StatusDetailsProps = {
  status: StatusType | null;
  onFilterChange: MouseEventHandler<HTMLButtonElement>;
};

function StatusDetails({ status, onFilterChange }: StatusDetailsProps) {
  const sm = useMediaQuery({
    query: '(min-width: 640px)', // = tailwind sm modifier
  });

  const statusButtonColor =
    status?.id === 3
      ? 'green'
      : status?.id === 4 || status?.id === 7
      ? 'red'
      : 'cyan';

  return status?.id !== undefined ? (
    <li className="flex items-center gap-2">
      Status:
      <Button
        style={statusButtonColor}
        onClick={onFilterChange}
        name="status"
        value={status.id.toString()}
      >
        {sm ? status.description : status.name}
      </Button>
    </li>
  ) : (
    <li className="dark:text-red-300 font-semibold text-red-700">
      {' '}
      No status description found
    </li>
  );
}

export default StatusDetails;
