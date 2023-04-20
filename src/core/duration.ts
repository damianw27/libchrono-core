import { PlainDuration } from '$core/types/plain-duration';
import { PlainDurationUtils } from '$core/plain-duration-utils';

/**
 * Class witch represent duration string. This class allows to perform some
 * arithmetical operations on durations and also to extract some explicit data.
 */
export class Duration {
  /**
   * Method allowing to construct new Duration class from PlainDuration.
   * @param {PlainDuration} plainDuration
   */
  public static of = (plainDuration: PlainDuration): Duration => {
    const timestamp = PlainDurationUtils.getTimestamp(plainDuration);

    return new Duration(timestamp);
  };

  /**
   * Property witch contains count of milliseconds in duration.
   */
  public readonly timestamp: number;

  public constructor(timestamp: number) {
    this.timestamp = timestamp;
  }

  /**
   * Method which allow to sum durations.
   * @param {Duration} duration
   */
  public add = (duration: Duration): Duration =>
    new Duration(this.timestamp + duration.timestamp);

  /**
   * Method which allow to subtract durations.
   * @param {Duration} duration
   */
  public sub = (duration: Duration): Duration =>
    new Duration(this.timestamp - duration.timestamp);

  /**
   * Method which allow to multiply durations.
   * @param {number} scalar
   */
  public mul = (scalar: number): Duration =>
    new Duration(this.timestamp * scalar);

  /**
   * Method which allow to divide durations.
   * @param {number} scalar
   */
  public div = (scalar: number): Duration => {
    if (scalar === 0) {
      throw new Error('Division by zero is not allowed');
    }

    return new Duration(this.timestamp / scalar);
  };

  /**
   * Method which allow to return current count of weeks.
   */
  public getWeeks = (): number => PlainDurationUtils.getWeeks(this.timestamp);

  /**
   * Method which allow to return current count of days.
   */
  public getDays = (): number => PlainDurationUtils.getDays(this.timestamp);

  /**
   * Method which allow to return current count of hours.
   */
  public getHours = (): number => PlainDurationUtils.getHours(this.timestamp);

  /**
   * Method which allow to return current count of minutes.
   */
  public getMinutes = (): number =>
    PlainDurationUtils.getMinutes(this.timestamp);

  /**
   * Method which allow to return current count of seconds.
   */
  public getSeconds = (): number =>
    PlainDurationUtils.getSeconds(this.timestamp);

  /**
   * Method which allow to return current count of milliseconds.
   */
  public getMillis = (): number => PlainDurationUtils.getMillis(this.timestamp);

  /**
   * Method which allow to convert Duration to PlainDuration
   */
  public toPlainDuration = (): PlainDuration =>
    PlainDurationUtils.getPlainDuration(this.timestamp);

  /**
   * Method which allow to represent Duration as string for example: 1d 20h 10m
   */
  public toStringLiteral = (): string =>
    PlainDurationUtils.getStringLiteral(this.toPlainDuration());

  /**
   * Method which allow to returns count of weeks
   */
  public toWeeks = (): number => PlainDurationUtils.getWeeks(this.timestamp);

  /**
   * Method which allow to returns count of days with weeks converted to days
   */
  public toDays = (): number =>
    PlainDurationUtils.getDays(this.timestamp) +
    PlainDurationUtils.getWeeks(this.timestamp) * 7;

  /**
   * Method which allow to returns count of hours with days and weeks converted
   * to hours
   */
  public toHours = (): number =>
    PlainDurationUtils.getHours(this.timestamp) + this.toDays() * 24;

  /**
   * Method which allow to returns count of minutes with hours, days and weeks
   * converted to minutes
   */
  public toMinutes = (): number =>
    PlainDurationUtils.getMinutes(this.timestamp) + this.toHours() * 60;

  /**
   * Method which allow to returns count of seconds with minutes, hours, days
   * and weeks converted to seconds
   */
  public toSeconds = (): number =>
    PlainDurationUtils.getSeconds(this.timestamp) + this.toMinutes() * 60;

  /**
   * Method which allow to returns count of millis with seconds, minutes, hours
   * and weeks converted to millis
   */
  public toMillis = (): number => this.timestamp;
}
