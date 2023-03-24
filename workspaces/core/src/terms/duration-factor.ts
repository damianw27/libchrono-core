import { BaseOperand } from '$terms/types/base-operand';
import { DurationExpression } from '$terms/duration-expression';
import { DurationStatement } from '$terms/duration-statement';
import {
  DurationContext,
  DurationFactorContext,
} from '$generated/DurationParser';
import { PlainDuration } from '$core/types/plain-duration';

export class DurationFactor implements BaseOperand {
  public static of = (context: DurationFactorContext): DurationFactor => {
    const childContext = context.duration() ?? context.durationExpression();

    if (childContext === undefined) {
      throw new Error('Duration factor needs to have child');
    }

    const child =
      childContext instanceof DurationContext
        ? new DurationStatement(childContext)
        : DurationExpression.of(childContext);

    return new DurationFactor(child);
  };

  public constructor(
    public readonly content: DurationStatement | DurationExpression,
  ) {}

  public solve = (): PlainDuration => this.content.solve();
}
