import { BaseOperand } from '$terms/types/base-operand';
import { DurationTermContext } from '$generated/DurationParser';
import { DurationFactor } from '$terms/duration-factor';
import { DurationTermTail } from '$terms/duration-term-tail';

export class DurationTerm implements BaseOperand {
  public static of = (context: DurationTermContext): DurationTerm => {
    const base = DurationFactor.of(context.durationFactor());
    const tails = context.durationTermTail().map((tailContext) => DurationTermTail.of(tailContext));
    return new DurationTerm(base, tails);
  };

  private constructor(
    private readonly base: DurationFactor,
    private readonly tails: DurationTermTail[],
  ) {}

  public solve = (): number => {
    let result = this.base.solve();

    this.tails.forEach((tail) => {
      result = tail.apply(result);
    });

    return result;
  };
}
