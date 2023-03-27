import { BaseOperand } from '$terms/types/base-operand';
import { ExpressionOperator } from '$terms/types/expression-operator';
import {
  DurationExpressionContext,
  DurationTermContext,
} from '$generated/DurationParser';
import { DurationTerm } from '$terms/duration-term';
import { PlainDuration } from '$core/types/plain-duration';

interface SolveExpressionParams {
  readonly left: PlainDuration;
  readonly right: PlainDuration;
}

export class DurationExpression implements BaseOperand {
  public static of = (
    context: DurationExpressionContext,
  ): DurationExpression => {
    const [left, right] = context.durationTerm();

    const operator =
      context.ADD().length === 0
        ? ExpressionOperator.SUB
        : ExpressionOperator.ADD;

    return new DurationExpression(left, right, operator);
  };

  private constructor(
    public readonly left: DurationTermContext,
    public readonly right: DurationTermContext,
    public readonly operator: ExpressionOperator,
  ) {}

  public solve = (): PlainDuration => {
    const left = DurationTerm.of(this.left).solve();
    const right = DurationTerm.of(this.right).solve();
    return this.solveExpression({ left, right });
  };

  private solveExpression = (params: SolveExpressionParams): PlainDuration => {
    const { left, right } = params;

    switch (this.operator) {
      case ExpressionOperator.ADD:
        return {
          weeks: left.weeks + right.weeks,
          days: left.days + right.days,
          hours: left.hours + right.hours,
          minutes: left.minutes + right.minutes,
          seconds: left.seconds + right.seconds,
          millis: left.millis + right.millis,
        };

      case ExpressionOperator.SUB:
        return {
          weeks: left.weeks - right.weeks,
          days: left.days - right.days,
          hours: left.hours - right.hours,
          minutes: left.minutes - right.minutes,
          seconds: left.seconds - right.seconds,
          millis: left.millis - right.millis,
        };
    }
  };
}
