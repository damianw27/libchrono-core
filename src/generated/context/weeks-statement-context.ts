import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { DurationListener } from '$generated/duration-listener';
import { DurationParser } from '$generated/duration-parser';

export class WeeksStatementContext extends ParserRuleContext {
  public NUMBER(): TerminalNode {
    return this.getToken(DurationParser.NUMBER, 0);
  }

  public WEEK(): TerminalNode {
    return this.getToken(DurationParser.WEEK, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return DurationParser.RULE_weeksStatement;
  }

  // @Override
  public enterRule(listener: DurationListener): void {
    if (listener.enterWeeksStatement) {
      listener.enterWeeksStatement(this);
    }
  }

  // @Override
  public exitRule(listener: DurationListener): void {
    if (listener.exitWeeksStatement) {
      listener.exitWeeksStatement(this);
    }
  }
}
