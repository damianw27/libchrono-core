import { BaseOperand } from '$terms/types/base-operand';
import { DurationExpression } from '$terms/duration-expression';
import { DurationStatement } from '$terms/duration-statement';
import {
  DurationFactorContext,
  DurationStatementContext,
} from '$generated/DurationParser';

export class DurationFactor implements BaseOperand {
  public static of = (context: DurationFactorContext): DurationFactor => {
    const childContext =
      context.durationStatement() ?? context.durationExpression();

    if (childContext === undefined) {
      throw new Error('Duration factor needs to have child');
    }

    const child =
      childContext instanceof DurationStatementContext
        ? new DurationStatement(childContext)
        : DurationExpression.of(childContext);

    return new DurationFactor(child);
  };

  public constructor(
    public readonly content: DurationStatement | DurationExpression,
  ) {}

  public solve = (): number => this.content.solve();
}
