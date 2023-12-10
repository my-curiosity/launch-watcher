import SearchBar from '@/components/SearchBar';
import OrderingSelect from '@/components/OrderingSelect';
import { DateRangeType } from '@/types/DateRangeType';
import { DATE_RANGE } from '@/lib/Constants';
import { FilterType } from '@/types/FilterType';
import Button from '@/components/Button';
import { ChangeEventHandler, FormEventHandler, MouseEventHandler } from 'react';

type FiltersProps = {
  filters: FilterType;
  onPageChange: (selectedItem: { selected: number }) => void;
  onOrderingChange: ChangeEventHandler<HTMLSelectElement>;
  onSearchTextChange: FormEventHandler<HTMLFormElement>;
  onFilterChange: MouseEventHandler<HTMLButtonElement>;
  onDateRangeChange: (e: DateRangeType) => void;
  onFilterReset: () => void;
};

function Filters({
  filters,
  onOrderingChange,
  onSearchTextChange,
  onFilterChange,
  onDateRangeChange,
  onFilterReset,
}: FiltersProps) {
  const statusButtonColor =
    filters.status === '3'
      ? 'green'
      : filters.status === '4' || filters.status === '7'
      ? 'red'
      : 'cyan';

  return (
    <>
      <SearchBar onSearchTextChange={onSearchTextChange} />

      <OrderingSelect
        ordering={filters.ordering}
        onOrderingChange={onOrderingChange}
      />

      <Button style={'primary'} onClick={onFilterReset}>
        Reset filters
      </Button>

      {filters.dateRange.start !== DATE_RANGE.start &&
        filters.dateRange.end !== DATE_RANGE.end && (
          <Button
            style={'primary'}
            onClick={() => onDateRangeChange(DATE_RANGE)}
          >
            {`${filters.dateRange.start.substring(0, 10)}
               - ${filters.dateRange.end.substring(0, 10)}`}
          </Button>
        )}

      {filters.status !== '' && (
        <Button
          style={statusButtonColor}
          name="status"
          onClick={onFilterChange}
        >
          {`status = ${filters.status}`}
        </Button>
      )}

      {filters.pad !== '' && (
        <Button style={'primary'} name="pad" onClick={onFilterChange}>
          {`pad = ${filters.pad}`}
        </Button>
      )}

      {filters.rocket !== '' && (
        <Button style={'primary'} name="rocket" onClick={onFilterChange}>
          {`rocket config = ${filters.rocket}`}
        </Button>
      )}
    </>
  );
}

export default Filters;
