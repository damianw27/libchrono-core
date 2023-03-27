import { PlainDuration } from '$core/types/plain-duration';

const millisInWeek = 604_800_000;
const millisInDay = 86_400_000;
const millisInHour = 3_600_000;
const millisInMinute = 60_000;
const millisInSecond = 1_000;
const daysInWeek = 7;
const hoursInDay = 24;
const minutesInHour = 60;
const secondsInMinute = 60;

const literalElementsMap: Record<string, string> = {
  weeks: 'w',
  days: 'd',
  hours: 'h',
  minutes: 'm',
  seconds: 's',
  millis: 'ms',
};

const durationLiteralSeparator = ' ';

export class PlainDurationUtils {
  public static getPlainDuration = (timestamp: number): PlainDuration => {
    return {
      weeks: PlainDurationUtils.getWeeks(timestamp),
      days: PlainDurationUtils.getDays(timestamp),
      hours: PlainDurationUtils.getHours(timestamp),
      minutes: PlainDurationUtils.getMinutes(timestamp),
      seconds: PlainDurationUtils.getSeconds(timestamp),
      millis: PlainDurationUtils.getMillis(timestamp),
    };
  };

  public static getWeeks = (timestamp: number): number =>
    Math.floor(timestamp / millisInWeek);

  public static getDays = (timestamp: number): number =>
    Math.floor(timestamp / millisInDay) % daysInWeek;

  public static getHours = (timestamp: number): number =>
    Math.floor(timestamp / millisInHour) % hoursInDay;

  public static getMinutes = (timestamp: number): number =>
    Math.floor(timestamp / millisInMinute) % minutesInHour;

  public static getSeconds = (timestamp: number): number =>
    Math.floor(timestamp / millisInSecond) % secondsInMinute;

  public static getMillis = (timestamp: number): number =>
    timestamp % millisInSecond;

  public static getTimestamp = (plainDuration: PlainDuration): number => {
    const millisInWeeks = plainDuration.weeks * millisInWeek;
    const millisInDays = plainDuration.days * millisInDay;
    const millisInHours = plainDuration.hours * millisInHour;
    const millisInMinutes = plainDuration.minutes * millisInMinute;
    const millisInSeconds = plainDuration.seconds * millisInSecond;

    return (
      millisInWeeks +
      millisInDays +
      millisInHours +
      millisInMinutes +
      millisInSeconds +
      plainDuration.millis
    );
  };

  public static getStringLiteral = (plainDuration: PlainDuration): string =>
    Object.entries(plainDuration)
      .filter(([, value]) => value !== 0)
      .map(([key, value]) => `${value}${literalElementsMap[key]}`)
      .join(durationLiteralSeparator);
}
