import { StartAppTime } from "../time-manager/start-app-time";

export const DistPaths = {
  KALININGRAD: () => `./dist-data/kaliningrad-${StartAppTime.getStartTime()}.json`,
  KALIINIGRAD_FLAT: () => `./dist-data/kaliningrad-flat-${StartAppTime.getStartTime()}.json`,
};

export const SrcPaths = {
  KALIINIGRAD: () => `./src-data/collected/kaliningrad.json`,
};
