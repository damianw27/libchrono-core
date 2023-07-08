import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { DurationStatementContext } from '$generated/context/duration-statement-context';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { DurationExpressionContext } from '$generated/context/duration-expression-context';
import { DurationListener } from '$generated/duration-listener';
import { DurationParser } from '$generated/duration-parser';

export class ParseDurationContext extends ParserRuleContext {
  public durationStatement(): DurationStatementContext | undefined {
    return this.tryGetRuleContext(0, DurationStatementContext);
  }

  public EOF(): TerminalNode {
    return this.getToken(DurationParser.EOF, 0);
  }

  public durationExpression(): DurationExpressionContext | undefined {
    return this.tryGetRuleContext(0, DurationExpressionContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return DurationParser.RULE_parseDuration;
  }

  // @Override
  public enterRule(listener: DurationListener): void {
    if (listener.enterParseDuration) {
      listener.enterParseDuration(this);
    }
  }

  // @Override
  public exitRule(listener: DurationListener): void {
    if (listener.exitParseDuration) {
      listener.exitParseDuration(this);
    }
  }
}
