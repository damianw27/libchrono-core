import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { DurationListener } from '$generated/duration-listener';
import { DurationParser } from '$generated/duration-parser';

export class DurationTermTailContext extends ParserRuleContext {
  public NUMBER(): TerminalNode {
    return this.getToken(DurationParser.NUMBER, 0);
  }

  public MUL(): TerminalNode | undefined {
    return this.tryGetToken(DurationParser.MUL, 0);
  }

  public DIV(): TerminalNode | undefined {
    return this.tryGetToken(DurationParser.DIV, 0);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return DurationParser.RULE_durationTermTail;
  }

  // @Override
  public enterRule(listener: DurationListener): void {
    if (listener.enterDurationTermTail) {
      listener.enterDurationTermTail(this);
    }
  }

  // @Override
  public exitRule(listener: DurationListener): void {
    if (listener.exitDurationTermTail) {
      listener.exitDurationTermTail(this);
    }
  }
}
