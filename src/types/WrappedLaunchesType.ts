import { LaunchType } from '@/types/LaunchType';

export type WrappedLaunchesType = {
  count: number;
  next: string;
  previous: string;
  results: LaunchType[] | null;
};
