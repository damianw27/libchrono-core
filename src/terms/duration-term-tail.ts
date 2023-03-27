import { TermOperator } from '$terms/types/term-operator';
import { DurationTermTailContext } from '$generated/DurationParser';

export class DurationTermTail {
  public static of = (context: DurationTermTailContext): DurationTermTail => {
    const operator =
      context.DIV() === undefined ? TermOperator.MUL : TermOperator.DIV;

    const scalar = parseFloat(context.NUMBER().text ?? '0');
    return new DurationTermTail(operator, scalar);
  };

  private constructor(
    private readonly operator: TermOperator,
    private readonly scalar: number,
  ) {}

  public apply = (timestamp: number): number => {
    switch (this.operator) {
      case TermOperator.MUL:
        return timestamp * this.scalar;

      case TermOperator.DIV:
        return timestamp / this.scalar;
    }
  };
}
