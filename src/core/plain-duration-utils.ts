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
const unitsOrder = ['w', 'd', 'h', 'm', 's', 'ms'];
const durationLiteralSeparator = ' ';

const literalElementsMap: Record<string, string> = {
  weeks: 'w',
  days: 'd',
  hours: 'h',
  minutes: 'm',
  seconds: 's',
  millis: 'ms',
};

/**
 * Utils class which allows to invoke some operations on timestamp of duration.
 */
export class PlainDurationUtils {
  /**
   * Method witch allows to converts timestamp in number format to PlainDuration.
   * @param {number} timestamp - duration timestamp
   */
  public static getPlainDuration = (timestamp: number): PlainDuration => ({
    weeks: PlainDurationUtils.getWeeks(timestamp),
    days: PlainDurationUtils.getDays(timestamp),
    hours: PlainDurationUtils.getHours(timestamp),
    minutes: PlainDurationUtils.getMinutes(timestamp),
    seconds: PlainDurationUtils.getSeconds(timestamp),
    millis: PlainDurationUtils.getMillis(timestamp),
  });

  /**
   * Method witch allows to extract weeks count from timestamp in number format.
   * @param {number} timestamp - duration timestamp
   */
  public static getWeeks = (timestamp: number): number => Math.floor(timestamp / millisInWeek);

  /**
   * Method witch allows to extract days count from timestamp in number format.
   * @param {number} timestamp - duration timestamp
   */
  public static getDays = (timestamp: number): number =>
    Math.floor(timestamp / millisInDay) % daysInWeek;

  /**
   * Method witch allows to extract hours count from timestamp in number format.
   * @param {number} timestamp - duration timestamp
   */
  public static getHours = (timestamp: number): number =>
    Math.floor(timestamp / millisInHour) % hoursInDay;

  /**
   * Method witch allows to extract minutes count from timestamp in number format.
   * @param {number} timestamp - duration timestamp
   */
  public static getMinutes = (timestamp: number): number =>
    Math.floor(timestamp / millisInMinute) % minutesInHour;

  /**
   * Method witch allows to extract seconds count from timestamp in number format.
   * @param {number} timestamp - duration timestamp
   */
  public static getSeconds = (timestamp: number): number =>
    Math.floor(timestamp / millisInSecond) % secondsInMinute;

  /**
   * Method witch allows to extract milliseconds count from timestamp in number format.
   * @param {number} timestamp - duration timestamp
   */
  public static getMillis = (timestamp: number): number => timestamp % millisInSecond;

  /**
   * Method witch allows to converts PlainDuration to timestamp in number format.
   * @param {PlainDuration} plainDuration
   */
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

  /**
   * Method which allows to converts PlainDuration to string literal format.
   * @param {PlainDuration} plainDuration
   */
  public static getStringLiteral = (plainDuration: PlainDuration): string =>
    Object.entries(plainDuration)
      .filter(([, value]) => value !== 0)
      .map(([key, value]) => `${value}${literalElementsMap[key]}`)
      .sort(PlainDurationUtils.sortOverUnits)
      .join(durationLiteralSeparator);

  private static sortOverUnits = (a: string, b: string) => {
    const aUnitIndex = unitsOrder.indexOf(a.slice(-1));
    const bUnitIndex = unitsOrder.indexOf(b.slice(-1));

    if (aUnitIndex < bUnitIndex) {
      return -1;
    }
    if (aUnitIndex > bUnitIndex) {
      return 1;
    }
    const aNum = parseInt(a.slice(0, -1), 10);
    const bNum = parseInt(b.slice(0, -1), 10);
    return aNum - bNum;
  };
}
