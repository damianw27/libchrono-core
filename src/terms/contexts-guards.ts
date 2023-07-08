import { DurationStatementContext } from '$generated/context/duration-statement-context';
import { DurationExpressionContext } from '$generated/context/duration-expression-context';

export const isDurationStatementContext = (target: any): target is DurationStatementContext =>
  'weeksStatement' in target &&
  'daysStatement' in target &&
  'hoursStatement' in target &&
  'minutesStatement' in target &&
  'secondsStatement' in target &&
  'millisecondsStatement' in target;

export const isDurationExpressionContext = (target: any): target is DurationExpressionContext =>
  'durationTerm' in target && 'durationExpressionTail' in target;
