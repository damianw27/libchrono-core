import { BaseOperand } from '$terms/types/base-operand';
import { TermOperator } from '$terms/types/term-operator';
import {
  DurationFactorContext,
  DurationTermContext,
} from '$generated/DurationParser';
import { DurationFactor } from '$terms/duration-factor';
import { PlainDuration } from '$core/types/plain-duration';

interface SolveTermParams {
  readonly left: PlainDuration;
  readonly right: PlainDuration;
}

export class DurationTerm implements BaseOperand {
  public static of = (context: DurationTermContext): DurationTerm => {
    console.log('term context', context);
    const [left, right] = context.durationFactor();

    const operator =
      context.DIV().length === 0 ? TermOperator.MUL : TermOperator.DIV;

    return new DurationTerm(left, right, operator);
  };

  private constructor(
    public readonly left: DurationFactorContext,
    public readonly right: DurationFactorContext,
    public readonly operator: TermOperator,
  ) {}

  public solve = (): PlainDuration => {
    const left = DurationFactor.of(this.left).solve();
    const right = DurationFactor.of(this.right).solve();
    return this.solveExpression({ left, right });
  };

  private solveExpression = (params: SolveTermParams): PlainDuration => {
    const { left, right } = params;

    switch (this.operator) {
      case TermOperator.MUL:
        return {
          weeks: left.weeks * right.weeks,
          days: left.days * right.days,
          hours: left.hours * right.hours,
          minutes: left.minutes * right.minutes,
          seconds: left.seconds * right.seconds,
          millis: left.millis * right.millis,
        };

      case TermOperator.DIV:
        return {
          weeks: left.weeks / right.weeks,
          days: left.days / right.days,
          hours: left.hours / right.hours,
          minutes: left.minutes / right.minutes,
          seconds: left.seconds / right.seconds,
          millis: left.millis / right.millis,
        };
    }
  };
}
