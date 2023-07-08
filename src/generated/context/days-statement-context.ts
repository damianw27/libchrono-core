import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { DurationListener } from '$generated/duration-listener';
import { DurationParser } from '$generated/duration-parser';

export class DaysStatementContext extends ParserRuleContext {
  public NUMBER(): TerminalNode {
    return this.getToken(DurationParser.NUMBER, 0);
  }

  public DAY(): TerminalNode {
    return this.getToken(DurationParser.DAY, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return DurationParser.RULE_daysStatement;
  }

  // @Override
  public enterRule(listener: DurationListener): void {
    if (listener.enterDaysStatement) {
      listener.enterDaysStatement(this);
    }
  }

  // @Override
  public exitRule(listener: DurationListener): void {
    if (listener.exitDaysStatement) {
      listener.exitDaysStatement(this);
    }
  }
}
