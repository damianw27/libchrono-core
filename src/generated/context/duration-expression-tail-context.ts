import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { DurationListener } from '$generated/duration-listener';
import { DurationParser } from '$generated/duration-parser';
import { DurationExpressionContext } from '$generated/context/duration-expression-context';

export class DurationExpressionTailContext extends ParserRuleContext {
  public durationExpression(): DurationExpressionContext {
    return this.getRuleContext(0, DurationExpressionContext);
  }

  public ADD(): TerminalNode | undefined {
    return this.tryGetToken(DurationParser.ADD, 0);
  }

  public SUB(): TerminalNode | undefined {
    return this.tryGetToken(DurationParser.SUB, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return DurationParser.RULE_durationExpressionTail;
  }

  // @Override
  public enterRule(listener: DurationListener): void {
    if (listener.enterDurationExpressionTail) {
      listener.enterDurationExpressionTail(this);
    }
  }

  // @Override
  public exitRule(listener: DurationListener): void {
    if (listener.exitDurationExpressionTail) {
      listener.exitDurationExpressionTail(this);
    }
  }
}
