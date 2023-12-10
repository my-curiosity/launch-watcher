import { MouseEventHandler, forwardRef } from 'react';
import FlipMove from 'react-flip-move';
import ListItem, { ListItemProps } from '@/components/ListItem';
import { LaunchType } from '@/types/LaunchType';

type ListProps = {
  launches: LaunchType[];
  onFilterChange: MouseEventHandler<HTMLButtonElement>;
};

const FunctionalListItem = forwardRef(
  (props: ListItemProps, ref: React.LegacyRef<HTMLDivElement>) => (
    <div ref={ref}>
      <ListItem {...props} />
    </div>
  )
);
FunctionalListItem.displayName = 'FunctionalListItem';

function List({ launches, onFilterChange }: ListProps) {
  return (
    <FlipMove>
      {launches.map((launch: LaunchType) => (
        <FunctionalListItem
          key={launch.id}
          launch={launch}
          onFilterChange={onFilterChange}
        />
      ))}
    </FlipMove>
  );
}

export default List;
