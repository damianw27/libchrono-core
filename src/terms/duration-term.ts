import { BaseOperand } from '$terms/types/base-operand';
import { DurationFactor } from '$terms/duration-factor';
import { DurationTermTail } from '$terms/duration-term-tail';
import { DurationTermTailContext } from '$generated/context/duration-term-tail-context';
import { DurationTermContext } from '$generated/context/duration-term-context';

export class DurationTerm implements BaseOperand {
  public static of = (context: DurationTermContext): DurationTerm => {
    const base = DurationFactor.of(context.durationFactor());

    const tails = context
      .durationTermTail()
      .map((tailContext: DurationTermTailContext) => DurationTermTail.of(tailContext));

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
