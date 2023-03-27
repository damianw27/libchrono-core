import { BaseOperand } from '$terms/types/base-operand';
import {
  DaysStatementContext,
  DurationContext,
  HoursStatementContext,
  MillisecondsStatementContext,
  MinutesStatementContext,
  SecondsStatementContext,
  WeeksStatementContext,
} from '$generated/DurationParser';
import { PlainDuration } from '$core/types/plain-duration';

const digitRegExp = new RegExp(/\d+/g);

const zeroSign = '0';

type DurationUnits =
  | WeeksStatementContext
  | DaysStatementContext
  | HoursStatementContext
  | MinutesStatementContext
  | SecondsStatementContext
  | MillisecondsStatementContext;

export class DurationStatement implements BaseOperand {
  public constructor(public readonly context: DurationContext) {}

  public solve = (): PlainDuration => ({
    weeks: this.extractValue(this.context.weeksStatement()),
    days: this.extractValue(this.context.daysStatement()),
    hours: this.extractValue(this.context.hoursStatement()),
    minutes: this.extractValue(this.context.minutesStatement()),
    seconds: this.extractValue(this.context.secondsStatement()),
    millis: this.extractValue(this.context.millisecondsStatement()),
  });

  private extractValue = (context: DurationUnits | undefined): number =>
    parseInt(context?.text?.match(digitRegExp)?.[0] ?? zeroSign, 10);
}
