import { MouseEventHandler, useState } from 'react';
import Image from 'next/image';
import { LaunchType } from '@/types/LaunchType';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import ItemPreview from '@/components/ItemPreview';
import ItemDetails from '@/components/ItemDetails';
import rocket from '../../public/rocket.svg';
import Button from '@/components/Button';

export type ListItemProps = {
  launch: LaunchType;
  onFilterChange: MouseEventHandler<HTMLButtonElement>;
};

function ListItem({ launch, onFilterChange }: ListItemProps) {
  const [showDetails, setShowDetails] = useState(false);

  const handleDetailsClick = (): void => {
    setShowDetails(!showDetails);
  };

  return (
    <div
      className={`${
        !showDetails ? '' : 'scale-x-[1.025]'
      } transition-transform duration-200 ease-in-out flex rounded m-3 bg-gray-50 ring-1 ring-black dark:bg-gray-900 dark:text-white dark:ring-cyan-900 ${
        showDetails ? '' : 'max-[500px]:h-30 h-24'
      }`}
    >
      {!showDetails && (
        <Image
          src={launch.image ?? rocket}
          alt=""
          width="100"
          height="100"
          className="ring-1 ring-black dark:ring-cyan-900 mr-2 flex-none rounded-l"
        />
      )}
      <section className="min-w-0 m-1 sm:m-2 md:m-3 relative flex-auto">
        <h1
          className={` ${
            showDetails ? '' : 'line-clamp-2 sm:line-clamp-1'
          } font-bold text-2xl sm:text-3xl text-blue-900 dark:text-blue-300 pr-10`}
        >
          {launch.name}
        </h1>

        <Button
          style={showDetails ? 'd_open' : 'd_closed'}
          onClick={handleDetailsClick}
        >
          {showDetails ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </Button>

        {!showDetails && <ItemPreview launch={launch} />}
        {showDetails && (
          <ItemDetails launch={launch} onFilterChange={onFilterChange} />
        )}
      </section>
    </div>
  );
}

export default ListItem;
