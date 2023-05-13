import { DurationErrorListener } from '$core/duration-error-listener';
import { ValidationResult } from '$core/types/validation-result';
import { DurationParseError } from '$core/duration-parse-error';
import { Duration } from '$core/duration';
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { PlainDuration } from '$core/types/plain-duration';
import { DurationStatement } from '$terms/duration-statement';
import { DurationParser, ParseDurationContext } from '$generated/DurationParser';
import { DurationLexer } from '$generated/DurationLexer';
import { DurationExpression } from '$terms/duration-expression';
import { PlainDurationUtils } from '$core/plain-duration-utils';
import { isDurationExpressionContext } from '$terms/contexts-guards';

/**
 * Utils class witch allows to convert and validate duration string literals.
 */
export class DurationUtils {
  /**
   * Method witch allows to parse duration string literals to Duration class.
   * @param {string} input - duration string literal
   */
  public static parse = (input: string): Duration => {
    const parser = DurationUtils.getParser(input);
    const errorListener = new DurationErrorListener();
    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);

    try {
      const result = parser.parseDuration();

      const plain = DurationUtils.compute(result);
      return Duration.of(plain);
    } catch (e) {
      throw new DurationParseError(errorListener);
    }
  };

  /**
   * Method witch allows to validate correctness of duration string literals.
   * @param {string} input - duration string literal
   */
  public static validate = (input: string): ValidationResult => {
    const parser = DurationUtils.getParser(input);
    const errorListener = new DurationErrorListener();
    parser.removeErrorListeners();
    parser.addErrorListener(errorListener);
    parser.parseDuration();

    return {
      errors: errorListener.errors,
      isValid: errorListener.errors.length === 0,
    };
  };

  private static getParser = (input: string): DurationParser => {
    const chars = CharStreams.fromString(input);
    const lexer = new DurationLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    return new DurationParser(tokens);
  };

  private static compute = (context: ParseDurationContext): PlainDuration => {
    const childContext = context.durationStatement() ?? context.durationExpression();

    if (childContext === undefined) {
      throw new Error('Invalid duration input provided.');
    }

    const resultTimestamp = isDurationExpressionContext(childContext)
      ? DurationExpression.of(childContext).solve()
      : new DurationStatement(childContext).solve();

    return PlainDurationUtils.getPlainDuration(resultTimestamp);
  };
}
