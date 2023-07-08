import { DurationListener } from '$generated/duration-listener';
import { DurationParser } from '$generated/duration-parser';
import { DurationGrammarUtils } from '$core/duration-grammar-utils';
import { WeeksStatementContext } from '$generated/context/weeks-statement-context';

describe('WeeksStatementContext', () => {
  const listener: DurationListener = {
    enterWeeksStatement: jest.fn(),
    exitWeeksStatement: jest.fn(),
  };

  const parser = DurationGrammarUtils.getParser('10w');
  const context = parser.weeksStatement();

  test('should return rule index', () => {
    expect(context.ruleIndex).toEqual(DurationParser.RULE_weeksStatement);
  });

  test('should call enterRule on listener', () => {
    context.enterRule(listener);
    expect(listener.enterWeeksStatement).toHaveBeenCalledWith(context);
  });

  test('should call exitRule on listener', () => {
    context.exitRule(listener);
    expect(listener.exitWeeksStatement).toHaveBeenCalledWith(context);
  });

  test('should get NUMBER token', () => {
    expect(context.NUMBER().text).toBe('10');
  });

  test('should get WEEK token', () => {
    expect(context.WEEK().text).toBe('w');
  });
});
