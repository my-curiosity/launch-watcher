import type { RecursivePartial, IOptions } from 'tsparticles-engine';
import type { DateRangeType } from '@/types/DateRangeType';

const RANGE_YEARS = 100;
export const API_URL = 'https://lldev.thespacedevs.com/2.2.0/launch/';
export const ITEMS_ON_PAGE = 10;
export const ORDERING = '-net';
export const DATE_RANGE: DateRangeType = {
  start: new Date(
    new Date().setFullYear(new Date().getFullYear() - RANGE_YEARS)
  ).toISOString(),
  end: new Date(
    new Date().setFullYear(new Date().getFullYear() + RANGE_YEARS)
  ).toISOString(),
};
export const TSPARTICLES_CONFIG: RecursivePartial<IOptions> = {
  fpsLimit: 60,
  particles: {
    color: {
      value: '#ffffff',
    },
    links: {
      color: '#ffffff',
      distance: 150,
      enable: true,
      opacity: 0.3,
      width: 0.3,
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: {
        default: 'bounce',
      },
      random: false,
      speed: 0.5,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 50,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: { min: 1, max: 3 },
    },
  },
};
