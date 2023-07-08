import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { DurationTermContext } from '$generated/context/duration-term-context';
import { DurationExpressionTailContext } from '$generated/context/duration-expression-tail-context';
import { DurationListener } from '$generated/duration-listener';
import { DurationParser } from '$generated/duration-parser';

export class DurationExpressionContext extends ParserRuleContext {
  public durationTerm(): DurationTermContext {
    return this.getRuleContext(0, DurationTermContext);
  }

  public durationExpressionTail(): DurationExpressionTailContext[];

  public durationExpressionTail(i: number): DurationExpressionTailContext;

  public durationExpressionTail(
    i?: number,
  ): DurationExpressionTailContext | DurationExpressionTailContext[] {
    if (i === undefined) {
      return this.getRuleContexts(DurationExpressionTailContext);
    }
    return this.getRuleContext(i, DurationExpressionTailContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return DurationParser.RULE_durationExpression;
  }

  // @Override
  public enterRule(listener: DurationListener): void {
    if (listener.enterDurationExpression) {
      listener.enterDurationExpression(this);
    }
  }

  // @Override
  public exitRule(listener: DurationListener): void {
    if (listener.exitDurationExpression) {
      listener.exitDurationExpression(this);
    }
  }
}
