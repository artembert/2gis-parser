import { StartAppTime } from "../time-manager/start-app-time";

export const DistPaths = {
  KALININGRAD: () => `./dist-data/kaliningrad-${StartAppTime.getStartTime()}.json`,
};
