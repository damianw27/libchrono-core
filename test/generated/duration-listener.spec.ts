import { DurationListener } from '$generated/DurationListener';
import {
  DaysStatementContext,
  DurationExpressionContext,
  DurationExpressionTailContext,
  DurationFactorContext,
  DurationStatementContext,
  DurationTermContext,
  DurationTermTailContext,
  HoursStatementContext,
  MillisecondsStatementContext,
  MinutesStatementContext,
  ParseDurationContext,
  SecondsStatementContext,
  WeeksStatementContext,
} from '$generated/DurationParser';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { ErrorNode } from 'antlr4ts/tree/ErrorNode';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';

describe('DurationListener', () => {
  const listener: Required<DurationListener> = {
    enterParseDuration: (ctx: ParseDurationContext) => {},
    exitParseDuration: (ctx: ParseDurationContext) => {},
    enterDurationExpression: (ctx: DurationExpressionContext) => {},
    exitDurationExpression: (ctx: DurationExpressionContext) => {},
    enterDurationExpressionTail: (ctx: DurationExpressionTailContext) => {},
    exitDurationExpressionTail: (ctx: DurationExpressionTailContext) => {},
    enterDurationTerm: (ctx: DurationTermContext) => {},
    exitDurationTerm: (ctx: DurationTermContext) => {},
    enterDurationTermTail: (ctx: DurationTermTailContext) => {},
    exitDurationTermTail: (ctx: DurationTermTailContext) => {},
    enterDurationFactor: (ctx: DurationFactorContext) => {},
    exitDurationFactor: (ctx: DurationFactorContext) => {},
    enterDurationStatement: (ctx: DurationStatementContext) => {},
    exitDurationStatement: (ctx: DurationStatementContext) => {},
    enterWeeksStatement: (ctx: WeeksStatementContext) => {},
    exitWeeksStatement: (ctx: WeeksStatementContext) => {},
    enterDaysStatement: (ctx: DaysStatementContext) => {},
    exitDaysStatement: (ctx: DaysStatementContext) => {},
    enterHoursStatement: (ctx: HoursStatementContext) => {},
    exitHoursStatement: (ctx: HoursStatementContext) => {},
    enterMinutesStatement: (ctx: MinutesStatementContext) => {},
    exitMinutesStatement: (ctx: MinutesStatementContext) => {},
    enterSecondsStatement: (ctx: SecondsStatementContext) => {},
    exitSecondsStatement: (ctx: SecondsStatementContext) => {},
    enterMillisecondsStatement: (ctx: MillisecondsStatementContext) => {},
    exitMillisecondsStatement: (ctx: MillisecondsStatementContext) => {},
    visitTerminal: (node: TerminalNode) => {},
    visitErrorNode: (node: ErrorNode) => {},
    enterEveryRule: (ctx: ParserRuleContext) => {},
    exitEveryRule: (ctx: ParserRuleContext) => {},
  };

  test('enterParseDuration is called with correct context', () => {
    const ctx = { text: '3h' } as unknown as ParseDurationContext;
    listener.enterParseDuration(ctx);
    expect(ctx.text).toEqual('3h');
  });

  test('exitParseDuration is called with correct context', () => {
    const ctx = { text: '3h' } as unknown as ParseDurationContext;
    listener.exitParseDuration(ctx);
    expect(ctx.text).toEqual('3h');
  });

  test('enterDurationExpression is called with correct context', () => {
    const ctx = { text: '3h' } as unknown as DurationExpressionContext;
    listener.enterDurationExpression(ctx);
    expect(ctx.text).toEqual('3h');
  });

  test('exitDurationExpression is called with correct context', () => {
    const ctx = { text: '3h' } as unknown as DurationExpressionContext;
    listener.exitDurationExpression(ctx);
    expect(ctx.text).toEqual('3h');
  });

  test('enterDurationExpressionTail is called with correct context', () => {
    const ctx = { text: '3h' } as unknown as DurationExpressionTailContext;
    listener.enterDurationExpressionTail(ctx);
    expect(ctx.text).toEqual('3h');
  });

  test('exitDurationExpressionTail is called with correct context', () => {
    const ctx = { text: '3h' } as unknown as DurationExpressionTailContext;
    listener.exitDurationExpressionTail(ctx);
    expect(ctx.text).toEqual('3h');
  });

  test('enterDurationTerm is called with correct context', () => {
    const ctx = { text: '3h' } as unknown as DurationTermContext;
    listener.enterDurationTerm(ctx);
    expect(ctx.text).toEqual('3h');
  });

  test('exitDurationTerm is called with correct context', () => {
    const ctx = { text: '3h' } as unknown as DurationTermContext;
    listener.exitDurationTerm(ctx);
    expect(ctx.text).toEqual('3h');
  });

  test('enterDurationTermTail is called with correct context', () => {
    const ctx = { text: '3h' } as unknown as DurationTermTailContext;
    listener.enterDurationTermTail(ctx);
    expect(ctx.text).toEqual('3h');
  });

  test('exitDurationTermTail is called with correct context', () => {
    const ctx = { text: '3h' } as unknown as DurationTermTailContext;
    listener.exitDurationTermTail(ctx);
    expect(ctx.text).toEqual('3h');
  });

  test('enterDurationFactor is called with correct context', () => {
    const ctx = { text: '3h' } as unknown as DurationFactorContext;
    listener.enterDurationFactor(ctx);
    expect(ctx.text).toEqual('3h');
  });

  test('exitDurationFactor is called with correct context', () => {
    const ctx = { text: '3h' } as unknown as DurationFactorContext;
    listener.exitDurationFactor(ctx);
    expect(ctx.text).toEqual('3h');
  });

  test('enterDurationStatement is called with correct context', () => {
    const ctx = { text: '3h' } as unknown as DurationStatementContext;
    listener.enterDurationStatement(ctx);
    expect(ctx.text).toEqual('3h');
  });

  test('exitDurationStatement is called with correct context', () => {
    const ctx = { text: '3h' } as unknown as DurationStatementContext;
    listener.exitDurationStatement(ctx);
    expect(ctx.text).toEqual('3h');
  });

  test('enterWeeksStatement is called with correct context', () => {
    const ctx = { text: '3h' } as unknown as WeeksStatementContext;
    listener.enterWeeksStatement(ctx);
    expect(ctx.text).toEqual('3h');
  });
});
