import { format, fromUnixTime } from "date-fns";

export const capitalize = (str: string): string => {
  return str?.at(0)?.toUpperCase() + str?.slice(1);
};

export const getSunrise = (value: number): string => {
  return format(fromUnixTime(value), "p");
};

export const getHourAgo = (value: number): number => {
  return new Date().getHours() - fromUnixTime(value).getHours();
};
