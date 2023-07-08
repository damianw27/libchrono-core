import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { DurationFactorContext } from '$generated/context/duration-factor-context';
import { DurationTermTailContext } from '$generated/context/duration-term-tail-context';
import { DurationListener } from '$generated/duration-listener';
import { DurationParser } from '$generated/duration-parser';

export class DurationTermContext extends ParserRuleContext {
  public durationFactor(): DurationFactorContext {
    return this.getRuleContext(0, DurationFactorContext);
  }

  public durationTermTail(): DurationTermTailContext[];

  public durationTermTail(i: number): DurationTermTailContext;

  public durationTermTail(i?: number): DurationTermTailContext | DurationTermTailContext[] {
    if (i === undefined) {
      return this.getRuleContexts(DurationTermTailContext);
    }
    return this.getRuleContext(i, DurationTermTailContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return DurationParser.RULE_durationTerm;
  }

  // @Override
  public enterRule(listener: DurationListener): void {
    if (listener.enterDurationTerm) {
      listener.enterDurationTerm(this);
    }
  }

  // @Override
  public exitRule(listener: DurationListener): void {
    if (listener.exitDurationTerm) {
      listener.exitDurationTerm(this);
    }
  }
}
