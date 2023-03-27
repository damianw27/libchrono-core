import { BaseOperand } from '$terms/types/base-operand';
import { DurationExpressionContext } from '$generated/DurationParser';
import { DurationTerm } from '$terms/duration-term';
import { DurationExpressionTail } from '$terms/duration-expression-tail';

export class DurationExpression implements BaseOperand {
  public static of = (
    context: DurationExpressionContext,
  ): DurationExpression => {
    const base = DurationTerm.of(context.durationTerm());

    const tails = context
      .durationExpressionTail()
      .map((tailContext) => DurationExpressionTail.of(tailContext));

    return new DurationExpression(base, tails);
  };

  private constructor(
    private readonly base: DurationTerm,
    private readonly tails: DurationExpressionTail[],
  ) {}

  public solve = (): number => {
    let result = this.base.solve();

    this.tails.forEach((tail) => {
      result = tail.apply(result);
    });

    return result;
  };
}
