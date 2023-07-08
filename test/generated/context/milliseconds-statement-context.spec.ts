import { DurationListener } from '$generated/duration-listener';
import { DurationParser } from '$generated/duration-parser';
import { DurationGrammarUtils } from '$core/duration-grammar-utils';

describe('MillisecondsStatementContext', () => {
  const listener: DurationListener = {
    enterMillisecondsStatement: jest.fn(),
    exitMillisecondsStatement: jest.fn(),
  };

  const parser = DurationGrammarUtils.getParser('10ms');
  const context = parser.millisecondsStatement();

  test('should return rule index', () => {
    expect(context.ruleIndex).toEqual(DurationParser.RULE_millisecondsStatement);
  });

  test('should call enterRule on listener', () => {
    context.enterRule(listener);
    expect(listener.enterMillisecondsStatement).toHaveBeenCalledWith(context);
  });

  test('should call exitRule on listener', () => {
    context.exitRule(listener);
    expect(listener.exitMillisecondsStatement).toHaveBeenCalledWith(context);
  });

  test('should get NUMBER token', () => {
    expect(context.NUMBER().text).toBe('10');
  });

  test('should get MILLIS token', () => {
    expect(context.MILLISECONDS()?.text).toBe('ms');
  });

  test('should get undefined from MILLIS token when MILLIS operator not provided', () => {
    const parser = DurationGrammarUtils.getParser('10');
    const context = parser.millisecondsStatement();
    expect(context.MILLISECONDS()?.text).toBeUndefined();
  });
});
