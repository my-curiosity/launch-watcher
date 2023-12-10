import { MissionType } from '@/types/MissionType';

type MissionDetailsProps = {
  mission: MissionType | null;
};

function MissionDetails({ mission }: MissionDetailsProps) {
  return mission != null ? (
    <>
      <li className="mt-2 text-black dark:text-white">
        Flight Type:{' '}
        <span className="font-light text-gray-700 dark:text-gray-400">
          {mission.type}
        </span>
      </li>
      {mission.orbit != null ? (
        <li className="text-black dark:text-white">
          Orbit:{' '}
          <span className="font-light text-gray-700 dark:text-gray-400">
            {mission.orbit.name}
          </span>
        </li>
      ) : (
        <li />
      )}
      <li className="font-light text-gray-700 dark:text-gray-400 mt-2">
        {mission.description}
      </li>
    </>
  ) : (
    <li className="mt-2 text-red-700 font-semibold dark:text-red-300">
      No mission description found
    </li>
  );
}

export default MissionDetails;
