import { StatusType } from '@/types/StatusType';
import { RocketType } from '@/types/RocketType';
import { PadType } from '@/types/PadType';
import { MissionType } from '@/types/MissionType';
import { ProviderType } from '@/types/ProviderType';

export type LaunchType = {
  id: string;
  url: string;
  slug: string;
  name: string;
  status: StatusType | null;
  last_updated: string;
  net: string | null;
  window_end: string | null;
  window_start: string | null;
  net_precision: StatusType | null;
  probability: number | null;
  weather_concerns: string | null;
  holdreason: string | null;
  failreason: string | null;
  hashtag: string | null;
  launch_service_provider: ProviderType | null;
  rocket: RocketType | null;
  mission: MissionType | null;
  pad: PadType | null;
  webcast_live: boolean;
  image: string | null;
  infographic: string | null;
  program: never;
  orbital_launch_attempt_count: number | null;
  location_launch_attempt_count: number | null;
  pad_launch_attempt_count: number | null;
  agency_launch_attempt_count: number | null;
  orbital_launch_attempt_count_year: number | null;
  location_launch_attempt_count_year: number | null;
  pad_launch_attempt_count_year: number | null;
  agency_launch_attempt_count_year: number | null;
};