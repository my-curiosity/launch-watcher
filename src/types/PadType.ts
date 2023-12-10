export type PadType = {
  id: number;
  url: string;
  agency_id: number | null;
  name: string | null;
  info_url: string | null;
  wiki_url: string | null;
  map_url: string | null;
  latitude: string | null;
  longitude: string | null;
  location: {
    id: number;
    url: string;
    name: string | null;
    country_code: string | null;
    map_image: string | null;
    timezone_name: string | null;
    total_launch_count: number | null;
    total_landing_count: number | null;
  };
};
