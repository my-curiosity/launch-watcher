import { DateRangeType } from '@/types/DateRangeType';

export type FilterType = {
  dateRange: DateRangeType;
  ordering: '-net' | '-name' | 'net' | 'name';
  status: string;
  pad: string;
  rocket: string;
  search: string;
};
