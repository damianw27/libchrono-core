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
  public static plainDurationFromTimestamp = (
    timestamp: number,
  ): PlainDuration => {
    return {
      weeks: Math.floor(timestamp / millisInWeek),
      days: Math.floor(timestamp / millisInDay) % daysInWeek,
      hours: Math.floor(timestamp / millisInHour) % hoursInDay,
      minutes: Math.floor(timestamp / millisInMinute) % minutesInHour,
      seconds: Math.floor(timestamp / millisInSecond) % secondsInMinute,
      millis: timestamp % millisInSecond,
    };
  };

  public static timestampFromPlainDuration = (
    plainDuration: PlainDuration,
  ): number => {
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

  public static stringFromPlainDuration = (
    plainDuration: PlainDuration,
  ): string =>
    Object.entries(plainDuration)
      .map(([key, value]) => `${value}${literalElementsMap[key]}`)
      .join(durationLiteralSeparator);
}
