import { PlainDuration } from '$core/types/plain-duration';

export class Duration {
  private readonly timestamp: number;

  public constructor(public readonly plain: PlainDuration) {
    this.timestamp = this.calculateTimestamp(plain);
  }

  public add = (duration: Duration): Duration => {
    const plain: PlainDuration = {
      weeks: this.plain.weeks + duration.plain.weeks,
      days: this.plain.days + duration.plain.days,
      hours: this.plain.hours + duration.plain.hours,
      minutes: this.plain.minutes + duration.plain.minutes,
      seconds: this.plain.seconds + duration.plain.seconds,
      millis: this.plain.millis + duration.plain.millis,
    };

    return new Duration(plain);
  };

  public sub = (duration: Duration): Duration => {
    const plain: PlainDuration = {
      weeks: this.plain.weeks - duration.plain.weeks,
      days: this.plain.days - duration.plain.days,
      hours: this.plain.hours - duration.plain.hours,
      minutes: this.plain.minutes - duration.plain.minutes,
      seconds: this.plain.seconds - duration.plain.seconds,
      millis: this.plain.millis - duration.plain.millis,
    };

    return new Duration(plain);
  };

  public mul = (duration: Duration): Duration => {
    const plain: PlainDuration = {
      weeks: this.plain.weeks * duration.plain.weeks,
      days: this.plain.days * duration.plain.days,
      hours: this.plain.hours * duration.plain.hours,
      minutes: this.plain.minutes * duration.plain.minutes,
      seconds: this.plain.seconds * duration.plain.seconds,
      millis: this.plain.millis * duration.plain.millis,
    };

    return new Duration(plain);
  };

  public div = (duration: Duration): Duration => {
    const plain: PlainDuration = {
      weeks: this.plain.weeks / duration.plain.weeks,
      days: this.plain.days / duration.plain.days,
      hours: this.plain.hours / duration.plain.hours,
      minutes: this.plain.minutes / duration.plain.minutes,
      seconds: this.plain.seconds / duration.plain.seconds,
      millis: this.plain.millis / duration.plain.millis,
    };

    return new Duration(plain);
  };

  private calculateTimestamp = (duration: PlainDuration): number => {
    const millisInWeeks = duration.weeks * 604_800_000;
    const millisInDays = duration.days * 86_400_000;
    const millisInHours = duration.hours * 3_600_000;
    const millisInMinutes = duration.minutes * 60_000;
    const millisInSeconds = duration.seconds * 1_000;

    return (
      millisInWeeks +
      millisInDays +
      millisInHours +
      millisInMinutes +
      millisInSeconds +
      duration.millis
    );
  };
}
