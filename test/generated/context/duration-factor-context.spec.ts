import { DurationListener } from '$generated/duration-listener';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { DurationParser } from '$generated/duration-parser';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { DurationFactorContext } from '$generated/context/duration-factor-context';
import { DurationStatementContext } from '$generated/context/duration-statement-context';
import { DurationExpressionContext } from '$generated/context/duration-expression-context';
import { DurationGrammarUtils } from '$core/duration-grammar-utils';

describe('DurationFactorContext', () => {
  const listener: DurationListener = {
    enterDurationFactor: jest.fn(),
    exitDurationFactor: jest.fn(),
  };

  const parser = DurationGrammarUtils.getParser('(10d + 1m)');
  const context = parser.durationFactor();

  test('should return correct ruleIndex', () => {
    expect(context.ruleIndex).toBe(DurationParser.RULE_durationFactor);
  });

  test('should call enterRule on listener', () => {
    context.enterRule(listener);
    expect(listener.enterDurationFactor).toHaveBeenCalledWith(context);
  });

  test('should call exitRule on listener', () => {
    context.exitRule(listener);
    expect(listener.exitDurationFactor).toHaveBeenCalledWith(context);
  });

  test('should get duration statement', () => {
    expect(context.durationStatement()?.text).toBeUndefined();
  });

  test('should get duration expression', () => {
    expect(context.durationExpression()?.text).toBe('10d+1m');
  });

  test('should get LP token', () => {
    expect(context.LP()?.text).toBe('(');
  });

  test('should get RP token', () => {
    expect(context.RP()?.text).toBe(')');
  });
});
