import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { DurationListener } from '$generated/duration-listener';
import { DurationParser } from '$generated/duration-parser';

export class SecondsStatementContext extends ParserRuleContext {
  public NUMBER(): TerminalNode {
    return this.getToken(DurationParser.NUMBER, 0);
  }

  public SECOND(): TerminalNode {
    return this.getToken(DurationParser.SECOND, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return DurationParser.RULE_secondsStatement;
  }

  // @Override
  public enterRule(listener: DurationListener): void {
    if (listener.enterSecondsStatement) {
      listener.enterSecondsStatement(this);
    }
  }

  // @Override
  public exitRule(listener: DurationListener): void {
    if (listener.exitSecondsStatement) {
      listener.exitSecondsStatement(this);
    }
  }
}
