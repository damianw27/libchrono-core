import { ExpressionOperator } from '$terms/types/expression-operator';
import { DurationExpressionTailContext } from '$generated/DurationParser';
import { DurationExpression } from '$terms/duration-expression';
import { BaseTail } from '$terms/types/base-tail';

export class DurationExpressionTail implements BaseTail {
  public static of = (context: DurationExpressionTailContext): DurationExpressionTail => {
    const operator = context.ADD() === undefined ? ExpressionOperator.SUB : ExpressionOperator.ADD;
    const expression = DurationExpression.of(context.durationExpression());
    return new DurationExpressionTail(operator, expression);
  };

  private constructor(
    private readonly operator: ExpressionOperator,
    private readonly expression: DurationExpression,
  ) {}

  public apply = (timestamp: number): number => {
    switch (this.operator) {
      case ExpressionOperator.ADD:
        return timestamp + this.expression.solve();

      case ExpressionOperator.SUB:
        return timestamp - this.expression.solve();
    }
  };

  public getOperator = (): ExpressionOperator => this.operator;
}
