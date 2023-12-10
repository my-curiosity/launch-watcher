export type MissionType = {
  id: number;
  name: string;
  description: string | null;
  launch_designator: string | null;
  type: string | null;
  orbit: {
    id: number;
    name: string;
    abbrev: string;
  } | null;
};
