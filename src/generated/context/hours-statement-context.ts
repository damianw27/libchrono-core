import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { DurationListener } from '$generated/duration-listener';
import { DurationParser } from '$generated/duration-parser';

export class HoursStatementContext extends ParserRuleContext {
  public NUMBER(): TerminalNode {
    return this.getToken(DurationParser.NUMBER, 0);
  }

  public HOUR(): TerminalNode {
    return this.getToken(DurationParser.HOUR, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return DurationParser.RULE_hoursStatement;
  }

  // @Override
  public enterRule(listener: DurationListener): void {
    if (listener.enterHoursStatement) {
      listener.enterHoursStatement(this);
    }
  }

  // @Override
  public exitRule(listener: DurationListener): void {
    if (listener.exitHoursStatement) {
      listener.exitHoursStatement(this);
    }
  }
}
