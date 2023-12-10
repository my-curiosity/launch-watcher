export type RocketType = {
  id: number;
  configuration: {
    id: number;
    url: string;
    name: string;
    family: string | null;
    full_name: string | null;
    variant: string | null;
  };
};
