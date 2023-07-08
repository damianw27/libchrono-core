import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { DurationStatementContext } from '$generated/context/duration-statement-context';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { DurationListener } from '$generated/duration-listener';
import { DurationParser } from '$generated/duration-parser';
import { DurationExpressionContext } from '$generated/context/duration-expression-context';

export class DurationFactorContext extends ParserRuleContext {
  public durationStatement(): DurationStatementContext | undefined {
    return this.tryGetRuleContext(0, DurationStatementContext);
  }

  public LP(): TerminalNode | undefined {
    return this.tryGetToken(DurationParser.LP, 0);
  }

  public durationExpression(): DurationExpressionContext | undefined {
    return this.tryGetRuleContext(0, DurationExpressionContext);
  }

  public RP(): TerminalNode | undefined {
    return this.tryGetToken(DurationParser.RP, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return DurationParser.RULE_durationFactor;
  }

  // @Override
  public enterRule(listener: DurationListener): void {
    if (listener.enterDurationFactor) {
      listener.enterDurationFactor(this);
    }
  }

  // @Override
  public exitRule(listener: DurationListener): void {
    if (listener.exitDurationFactor) {
      listener.exitDurationFactor(this);
    }
  }
}
