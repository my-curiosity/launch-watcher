import { ProviderType } from '@/types/ProviderType';

type ProviderDetailsProps = {
  provider: ProviderType | null;
};

function ProviderDetails({ provider }: ProviderDetailsProps) {
  return provider != null ? (
    <>
      <li className="mt-2 text-black dark:text-white">
        Launched by:{' '}
        <span className="font-light text-gray-700 dark:text-gray-400">
          {provider?.name}
        </span>
      </li>
      <li className="text-black dark:text-white">
        Provider Type:{' '}
        <span className="font-light text-gray-700 dark:text-gray-400">
          {provider?.type}
        </span>
      </li>
    </>
  ) : (
    <li className="mt-2 text-red-700 font-semibold dark:text-red-300">
      No launch service provider found
    </li>
  );
}

export default ProviderDetails;
