import { DurationStatementContext } from '$generated/context/duration-statement-context';
import { DurationParser } from '$generated/duration-parser';
import { DurationListener } from '$generated/duration-listener';
import { DurationGrammarUtils } from '$core/duration-grammar-utils';

describe('DurationStatementContext', () => {
  const listener: DurationListener = {
    enterDurationStatement: jest.fn(),
    exitDurationStatement: jest.fn(),
  };

  const parser = DurationGrammarUtils.getParser('1w 2d 10h 5m 30s 300ms');
  const context = parser.durationStatement();

  test('should return correct ruleIndex', () => {
    expect(context.ruleIndex).toBe(DurationParser.RULE_durationStatement);
  });

  test('should call enterRule on listener', () => {
    context.enterRule(listener);
    expect(listener.enterDurationStatement).toHaveBeenCalledWith(context);
  });

  test('should call exitRule on listener', () => {
    context.exitRule(listener);
    expect(listener.exitDurationStatement).toHaveBeenCalledWith(context);
  });

  test('should get week statement', () => {
    expect(context.weeksStatement()?.text).toBe('1w');
  });

  test('should get days statement', () => {
    expect(context.daysStatement()?.text).toBe('2d');
  });

  test('should get hours statement', () => {
    expect(context.hoursStatement()?.text).toBe('10h');
  });

  test('should get minutes statement', () => {
    expect(context.minutesStatement()?.text).toBe('5m');
  });

  test('should get seconds statement', () => {
    expect(context.secondsStatement()?.text).toBe('30s');
  });

  test('should get milliseconds statement', () => {
    expect(context.millisecondsStatement()?.text).toBe('300ms');
  });
});
