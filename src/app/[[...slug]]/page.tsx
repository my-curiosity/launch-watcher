'use client';

import {
  ChangeEventHandler,
  FormEventHandler,
  MouseEventHandler,
  useState,
} from 'react';
import useSWR from 'swr';
import List from '@/components/List';
import Controls from '@/components/Controls';
import Pages from '@/components/Pages';
import DateWrapper from '@/components/DateWrapper';
import ParticleWrapper from '@/components/ParticleWrapper';
import { DateRangeType } from '@/types/DateRangeType';
import { WrappedLaunchesType } from '@/types/WrappedLaunchesType';
import { DATE_RANGE, ORDERING, API_URL, ITEMS_ON_PAGE } from '@/lib/Constants';
import { FilterType } from '@/types/FilterType';
import { OrderingType } from '@/types/OrderingType';
import Filters from '@/components/Filters';
import Button from '@/components/Button';
import APIChecker from '@/components/APIChecker';

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const json = (await res.json()) as Promise<WrappedLaunchesType>;

  if (!res.ok) {
    throw new Error(`${res.status} An error occurred while fetching the data.`);
  }
  return json;
};

function Page() {
  const [filters, setFilters] = useState<FilterType>({
    dateRange: DATE_RANGE,
    ordering: ORDERING,
    status: '',
    pad: '',
    rocket: '',
    search: '',
  });
  const [currentPage, setCurrentPage] = useState(0);
  const [dateWrapperActive, setDateWrapperActive] = useState(false);

  const { data, isLoading, error } = useSWR(
    `${API_URL}?limit=100&offset=${0}&net__gte=${
      filters.dateRange.start
    }&net__lte=${filters.dateRange.end}&search=${filters.search}&status=${
      filters.status
    }&rocket__configuration__id=${filters.rocket}&pad=${filters.pad}&ordering=${
      filters.ordering
    }`,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      shouldRetryOnError: false,
    }
  );

  const launches = data?.results ?? [];
  const noResults = !error && !isLoading && launches.length === 0;
  const pageCount = Math.ceil(launches.length / ITEMS_ON_PAGE);
  const slicedLaunches = launches.slice(
    currentPage * ITEMS_ON_PAGE,
    (currentPage + 1) * ITEMS_ON_PAGE
  );

  const handlePageChange = (selectedItem: { selected: number }): void => {
    setCurrentPage(selectedItem.selected);
  };

  const handleDateRangeChange = (e: DateRangeType): void => {
    setCurrentPage(0);
    setFilters({
      ...filters,
      dateRange: e,
    });
  };

  const handleOrderingChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setCurrentPage(0);
    setFilters({
      ...filters,
      ordering: e.target.value as OrderingType,
    });
  };

  const handleSearchTextChange: FormEventHandler<HTMLFormElement> = (e) => {
    setCurrentPage(0);
    e.preventDefault();
    const target = e.target as typeof e.target & {
      text: { value: string };
    };
    setFilters({
      ...filters,
      search: target.text.value,
    });
  };

  const handleFilterChange: MouseEventHandler<HTMLButtonElement> = (e) => {
    setCurrentPage(0);
    setFilters({
      ...filters,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleFilterReset = (): void => {
    setCurrentPage(0);
    setFilters({
      dateRange: DATE_RANGE,
      ordering: ORDERING,
      status: '',
      pad: '',
      rocket: '',
      search: '',
    });
  };

  const handleDateWrapperActivation = (): void => {
    setDateWrapperActive(!dateWrapperActive);
  };

  return (
    <main>
      <ParticleWrapper />
      <Controls>
        <APIChecker
          status={
            error && error.message.startsWith('429')
              ? 'throttle'
              : error
              ? 'error'
              : isLoading
              ? 'wait'
              : noResults
              ? 'empty'
              : 'ok'
          }
        />
        <Pages
          currentPage={currentPage}
          pageCount={pageCount}
          onPageChange={handlePageChange}
        />
        <Button style={'primary'} onClick={handleDateWrapperActivation}>
          {`${dateWrapperActive ? 'Close' : 'Open'} time selection`}
        </Button>
        <Filters
          filters={filters}
          onPageChange={handlePageChange}
          onOrderingChange={handleOrderingChange}
          onSearchTextChange={handleSearchTextChange}
          onFilterChange={handleFilterChange}
          onDateRangeChange={handleDateRangeChange}
          onFilterReset={handleFilterReset}
        />
      </Controls>

      {dateWrapperActive && (
        <DateWrapper
          dateRange={filters.dateRange}
          onDateRangeChange={handleDateRangeChange}
        />
      )}
      <List launches={slicedLaunches} onFilterChange={handleFilterChange} />
    </main>
  );
}

export default Page;
