import { format, formatDistance, fromUnixTime } from "date-fns";

export const capitalize = (str: string): string => {
  return str?.at(0)?.toUpperCase() + str?.slice(1);
};

export const getSunrise = (value: number): string => {
  return format(fromUnixTime(value), "p");
};

export const getDateFromDt = (value: number) => {
  return format(fromUnixTime(value), "P");
};

export const getHourAgo = (value: number): string => {
  return formatDistance(fromUnixTime(value), new Date(), {
    addSuffix: true,
  });
};
