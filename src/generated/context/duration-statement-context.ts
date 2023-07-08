import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { WeeksStatementContext } from '$generated/context/weeks-statement-context';
import { DaysStatementContext } from '$generated/context/days-statement-context';
import { HoursStatementContext } from '$generated/context/hours-statement-context';
import { MinutesStatementContext } from '$generated/context/minutes-statement-context';
import { SecondsStatementContext } from '$generated/context/seconds-statement-context';
import { MillisecondsStatementContext } from '$generated/context/milliseconds-statement-context';
import { DurationListener } from '$generated/duration-listener';
import { DurationParser } from '$generated/duration-parser';

export class DurationStatementContext extends ParserRuleContext {
  public weeksStatement(): WeeksStatementContext | undefined {
    return this.tryGetRuleContext(0, WeeksStatementContext);
  }

  public daysStatement(): DaysStatementContext | undefined {
    return this.tryGetRuleContext(0, DaysStatementContext);
  }

  public hoursStatement(): HoursStatementContext | undefined {
    return this.tryGetRuleContext(0, HoursStatementContext);
  }

  public minutesStatement(): MinutesStatementContext | undefined {
    return this.tryGetRuleContext(0, MinutesStatementContext);
  }

  public secondsStatement(): SecondsStatementContext | undefined {
    return this.tryGetRuleContext(0, SecondsStatementContext);
  }

  public millisecondsStatement(): MillisecondsStatementContext | undefined {
    return this.tryGetRuleContext(0, MillisecondsStatementContext);
  }

  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }

  // @Override
  public get ruleIndex(): number {
    return DurationParser.RULE_durationStatement;
  }

  // @Override
  public enterRule(listener: DurationListener): void {
    if (listener.enterDurationStatement) {
      listener.enterDurationStatement(this);
    }
  }

  // @Override
  public exitRule(listener: DurationListener): void {
    if (listener.exitDurationStatement) {
      listener.exitDurationStatement(this);
    }
  }
}
