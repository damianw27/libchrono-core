import { PlainDuration } from '$core/types/plain-duration';
import { PlainDurationUtils } from '$core/plain-duration-utils';

export class Duration {
  public static of = (plainDuration: PlainDuration): Duration => {
    const timestamp = PlainDurationUtils.getTimestamp(plainDuration);

    return new Duration(timestamp);
  };

  public constructor(public readonly timestamp: number) {}

  public add = (duration: Duration): Duration =>
    new Duration(this.timestamp + duration.timestamp);

  public sub = (duration: Duration): Duration =>
    new Duration(this.timestamp - duration.timestamp);

  public mul = (scalar: number): Duration =>
    new Duration(this.timestamp * scalar);

  public div = (scalar: number): Duration => {
    if (scalar === 0) {
      throw new Error('Division by zero is not allowed');
    }

    return new Duration(this.timestamp / scalar);
  };

  public getWeeks = (): number => PlainDurationUtils.getWeeks(this.timestamp);

  public getDays = (): number => PlainDurationUtils.getDays(this.timestamp);

  public getHours = (): number => PlainDurationUtils.getHours(this.timestamp);

  public getMinutes = (): number =>
    PlainDurationUtils.getMinutes(this.timestamp);

  public getSeconds = (): number =>
    PlainDurationUtils.getSeconds(this.timestamp);

  public getMillis = (): number => PlainDurationUtils.getMillis(this.timestamp);

  public toPlainDuration = (): PlainDuration =>
    PlainDurationUtils.getPlainDuration(this.timestamp);

  public toStringLiteral = (): string =>
    PlainDurationUtils.getStringLiteral(this.toPlainDuration());
}
