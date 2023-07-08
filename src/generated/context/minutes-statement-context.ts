import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { DurationListener } from '$generated/duration-listener';
import { DurationParser } from '$generated/duration-parser';

export class MinutesStatementContext extends ParserRuleContext {
  public NUMBER(): TerminalNode {
    return this.getToken(DurationParser.NUMBER, 0);
  }

  public MINUTE(): TerminalNode {
    return this.getToken(DurationParser.MINUTE, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return DurationParser.RULE_minutesStatement;
  }

  // @Override
  public enterRule(listener: DurationListener): void {
    if (listener.enterMinutesStatement) {
      listener.enterMinutesStatement(this);
    }
  }

  // @Override
  public exitRule(listener: DurationListener): void {
    if (listener.exitMinutesStatement) {
      listener.exitMinutesStatement(this);
    }
  }
}
