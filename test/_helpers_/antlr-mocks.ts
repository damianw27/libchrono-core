import { TermOperator } from '$terms/types/term-operator';
import { ExpressionOperator } from '$terms/types/expression-operator';
import { DurationUnits } from '$terms/duration-statement';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { DurationStatementContext } from '$generated/context/duration-statement-context';
import { DurationFactorContext } from '$generated/context/duration-factor-context';
import { DurationTermTailContext } from '$generated/context/duration-term-tail-context';
import { DurationTermContext } from '$generated/context/duration-term-context';
import { DurationExpressionTailContext } from '$generated/context/duration-expression-tail-context';
import { DurationExpressionContext } from '$generated/context/duration-expression-context';
import { ParseDurationContext } from '$generated/context/parse-duration-context';

const mockDurationUnitContext = (text?: string): DurationUnits =>
  ({ text } as unknown as DurationUnits);

const mockTerminalNode = (text: string): TerminalNode => ({ text } as unknown as TerminalNode);

export class AntlrMocks {
  public durationStatementContextEmptyMock: DurationStatementContext = {
    weeksStatement: () => undefined,
    daysStatement: () => undefined,
    hoursStatement: () => undefined,
    minutesStatement: () => undefined,
    secondsStatement: () => undefined,
    millisecondsStatement: () => undefined,
  } as unknown as DurationStatementContext;

  public durationStatementContextUnrecognizedMock: DurationStatementContext = {
    weeksStatement: () => undefined,
    daysStatement: () => mockDurationUnitContext('2d'),
    hoursStatement: () => undefined,
    minutesStatement: () => mockDurationUnitContext('4m'),
    secondsStatement: () => mockDurationUnitContext('5s'),
    millisecondsStatement: () => mockDurationUnitContext('100ms'),
    unrecognizedStatement: () => mockDurationUnitContext('1ur'),
  } as unknown as DurationStatementContext;

  public durationStatementContextZeroMock: DurationStatementContext = {
    weeksStatement: () => mockDurationUnitContext('0w'),
    daysStatement: () => mockDurationUnitContext('0d'),
    hoursStatement: () => mockDurationUnitContext('0h'),
    minutesStatement: () => mockDurationUnitContext('0m'),
    secondsStatement: () => mockDurationUnitContext('0s'),
    millisecondsStatement: () => mockDurationUnitContext('0ms'),
  } as unknown as DurationStatementContext;

  public durationStatementContext1Mock: DurationStatementContext = {
    weeksStatement: () => mockDurationUnitContext('1w'),
    daysStatement: () => mockDurationUnitContext('2d'),
    hoursStatement: () => mockDurationUnitContext('3h'),
    minutesStatement: () => mockDurationUnitContext('4m'),
    secondsStatement: () => mockDurationUnitContext('5s'),
    millisecondsStatement: () => mockDurationUnitContext('100ms'),
  } as unknown as DurationStatementContext;

  public durationStatementContext2Mock: DurationStatementContext = {
    weeksStatement: () => undefined,
    daysStatement: () => mockDurationUnitContext('2d'),
    hoursStatement: () => undefined,
    minutesStatement: () => mockDurationUnitContext('4m'),
    secondsStatement: () => mockDurationUnitContext('5s'),
    millisecondsStatement: () => mockDurationUnitContext('100ms'),
  } as unknown as DurationStatementContext;

  public durationFactorContextStatement1Mock: DurationFactorContext = {
    durationStatement: () => this.durationStatementContext1Mock,
    durationExpression: () => undefined,
  } as unknown as DurationFactorContext;

  public durationFactorContextStatement2Mock: DurationFactorContext = {
    durationStatement: () => this.durationStatementContext2Mock,
    durationExpression: () => undefined,
  } as unknown as DurationFactorContext;

  public durationTermTailDivContextMock: DurationTermTailContext = {
    DIV: () => TermOperator.DIV,
    NUMBER: () => mockTerminalNode('2'),
  } as unknown as DurationTermTailContext;

  public durationTermTailMulContextMock: DurationTermTailContext = {
    DIV: () => undefined,
    NUMBER: () => mockTerminalNode('4'),
  } as unknown as DurationTermTailContext;

  public durationTermContext1Mock: DurationTermContext = {
    durationFactor: () => this.durationFactorContextStatement1Mock,
    durationTermTail: () => [
      this.durationTermTailDivContextMock,
      this.durationTermTailMulContextMock,
    ],
  } as unknown as DurationTermContext;

  public durationTermContext2Mock: DurationTermContext = {
    durationFactor: () => this.durationFactorContextStatement2Mock,
    durationTermTail: () => [],
  } as unknown as DurationTermContext;

  public durationExpressionContext1Mock: DurationExpressionContext = {
    durationTerm: () => this.durationTermContext1Mock,
    durationExpressionTail: () => [],
  } as unknown as DurationExpressionContext;

  public durationExpressionTailContextAddMock: DurationExpressionTailContext = {
    ADD: () => ExpressionOperator.ADD,
    durationExpression: () => this.durationExpressionContext1Mock,
  } as unknown as DurationExpressionTailContext;

  public durationExpressionTailContextSubMock: DurationExpressionTailContext = {
    ADD: () => undefined,
    durationExpression: () => this.durationExpressionContext1Mock,
  } as unknown as DurationExpressionTailContext;

  public durationExpressionContextNoTailsMock: DurationExpressionContext = {
    durationTerm: () => this.durationTermContext2Mock,
    durationExpressionTail: () => [],
  } as unknown as DurationExpressionContext;

  public durationExpressionContextOneTailMock: DurationExpressionContext = {
    durationTerm: () => this.durationTermContext2Mock,
    durationExpressionTail: () => [this.durationExpressionTailContextAddMock],
  } as unknown as DurationExpressionContext;

  public durationExpressionContextMultipleTailMock: DurationExpressionContext = {
    durationTerm: () => this.durationTermContext2Mock,
    durationExpressionTail: () => [
      this.durationExpressionTailContextAddMock,
      this.durationExpressionTailContextSubMock,
    ],
  } as unknown as DurationExpressionContext;

  public durationFactorContextEmptyMock: DurationFactorContext = {
    durationStatement: () => undefined,
    durationExpression: () => undefined,
  } as unknown as DurationFactorContext;

  public durationFactorContextAddMock: DurationFactorContext = {
    durationStatement: () => undefined,
    durationExpression: () => this.durationExpressionContextOneTailMock,
  } as unknown as DurationFactorContext;

  public parseDurationContextEmptyMock: ParseDurationContext = {
    durationStatement: () => undefined,
    durationExpression: () => undefined,
  } as unknown as ParseDurationContext;

  public parseDurationContextDefinedMock: ParseDurationContext = {
    durationStatement: () => this.durationStatementContext1Mock,
    durationExpression: () => this.durationExpressionContextNoTailsMock,
  } as unknown as ParseDurationContext;
}
