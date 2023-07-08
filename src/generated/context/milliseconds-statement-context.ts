import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { DurationListener } from '$generated/duration-listener';
import { DurationParser } from '$generated/duration-parser';

export class MillisecondsStatementContext extends ParserRuleContext {
  public NUMBER(): TerminalNode {
    return this.getToken(DurationParser.NUMBER, 0);
  }

  public MILLISECONDS(): TerminalNode | undefined {
    return this.tryGetToken(DurationParser.MILLISECONDS, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return DurationParser.RULE_millisecondsStatement;
  }

  // @Override
  public enterRule(listener: DurationListener): void {
    if (listener.enterMillisecondsStatement) {
      listener.enterMillisecondsStatement(this);
    }
  }

  // @Override
  public exitRule(listener: DurationListener): void {
    if (listener.exitMillisecondsStatement) {
      listener.exitMillisecondsStatement(this);
    }
  }
}
