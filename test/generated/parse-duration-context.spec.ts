import { DurationParser, ParseDurationContext } from '$generated/DurationParser';
import { AntlrMocks } from '$test/_helpers_/antlr-mocks';

describe('ParseDurationContext', () => {
  const antlrMocks = new AntlrMocks();

  it('should return undefined for durationStatement() and durationExpression() if they are not set', () => {
    const parseDurationContext = antlrMocks.parseDurationContextEmptyMock;
    expect(parseDurationContext.durationStatement()).toBeUndefined();
    expect(parseDurationContext.durationExpression()).toBeUndefined();
  });

  it('should return the correct values for durationStatement() and durationExpression() if they are set', () => {
    const parseDurationContext = antlrMocks.parseDurationContextDefinedMock;
    expect(parseDurationContext.durationStatement()).toBe(antlrMocks.durationStatementContext1Mock);
    expect(parseDurationContext.durationExpression()).toBe(antlrMocks.durationExpressionContextNoTailsMock);
  });

  it('should return the correct rule index', () => {
    const parseDurationContext = new ParseDurationContext(undefined, 0);
    expect(parseDurationContext.ruleIndex).toBe(DurationParser.RULE_parseDuration);
  });
});
