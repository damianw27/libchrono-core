import { DurationListener } from '$generated/duration-listener';
import { DurationParser } from '$generated/duration-parser';
import { DurationGrammarUtils } from '$core/duration-grammar-utils';
import { ParseDurationContext } from '$generated/context/parse-duration-context';

describe('ParseDurationContext', () => {
  const listener: DurationListener = {
    enterParseDuration: jest.fn(),
    exitParseDuration: jest.fn(),
  };

  const parser = DurationGrammarUtils.getParser('10m + 2m');
  const context = parser.parseDuration();

  test('should return rule index', () => {
    expect(context.ruleIndex).toEqual(DurationParser.RULE_parseDuration);
  });

  test('should call enterRule on listener', () => {
    context.enterRule(listener);
    expect(listener.enterParseDuration).toHaveBeenCalledWith(context);
  });

  test('should call exitRule on listener', () => {
    context.exitRule(listener);
    expect(listener.exitParseDuration).toHaveBeenCalledWith(context);
  });

  test('should get undefined from duration statement', () => {
    expect(context.durationStatement()?.text).toBeUndefined();
  });

  test('should get duration expression', () => {
    expect(context.durationExpression()?.text).toBe('10m+2m');
  });

  test('should get EOF token', () => {
    expect(context.EOF().text).toBe('<EOF>');
  });
});
