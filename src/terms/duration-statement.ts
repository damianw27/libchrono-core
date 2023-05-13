import { BaseOperand } from '$terms/types/base-operand';
import {
  DaysStatementContext,
  DurationStatementContext,
  HoursStatementContext,
  MillisecondsStatementContext,
  MinutesStatementContext,
  SecondsStatementContext,
  WeeksStatementContext,
} from '$generated/DurationParser';
import { PlainDurationUtils } from '$core/plain-duration-utils';

const digitRegExp = new RegExp(/\d+/g);

const zeroSign = '0';

export type DurationUnits =
  | WeeksStatementContext
  | DaysStatementContext
  | HoursStatementContext
  | MinutesStatementContext
  | SecondsStatementContext
  | MillisecondsStatementContext;

export class DurationStatement implements BaseOperand {
  public constructor(private readonly context: DurationStatementContext) {}

  public solve = (): number => {
    const plainDuration = {
      weeks: this.extractValue(this.context.weeksStatement()),
      days: this.extractValue(this.context.daysStatement()),
      hours: this.extractValue(this.context.hoursStatement()),
      minutes: this.extractValue(this.context.minutesStatement()),
      seconds: this.extractValue(this.context.secondsStatement()),
      millis: this.extractValue(this.context.millisecondsStatement()),
    };

    return PlainDurationUtils.getTimestamp(plainDuration);
  };

  private extractValue = (context: DurationUnits | undefined): number =>
    parseFloat(context?.text?.match(digitRegExp)?.[0] ?? zeroSign);
}
