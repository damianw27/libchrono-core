import { PlainDuration } from '$core/types/plain-duration';
import { PlainDurationUtils } from '$core/plain-duration-utils';

export class Duration {
  public static of = (plainDuration: PlainDuration): Duration => {
    const timestamp =
      PlainDurationUtils.timestampFromPlainDuration(plainDuration);

    return new Duration(timestamp);
  };

  public constructor(public readonly timestamp: number) {}

  public add = (duration: Duration): Duration => {
    return new Duration(this.timestamp + duration.timestamp);
  };

  public sub = (duration: Duration): Duration => {
    return new Duration(this.timestamp - duration.timestamp);
  };

  public mul = (duration: Duration): Duration => {
    return new Duration(this.timestamp * duration.timestamp);
  };

  public div = (duration: Duration): Duration => {
    return new Duration(this.timestamp / duration.timestamp);
  };

  public toPlainDuration = (): PlainDuration =>
    PlainDurationUtils.plainDurationFromTimestamp(this.timestamp);

  public toLiteral = (): string =>
    PlainDurationUtils.stringFromPlainDuration(this.toPlainDuration());
}
