import { DurationErrorListener } from '$core/duration-error-listener';
import { ValidationResult } from '$core/types/validation-result';
import { DurationParseError } from '$core/duration-parse-error';
import { Duration } from '$core/duration';
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { PlainDuration } from '$core/types/plain-duration';
import { DurationStatement } from '$terms/duration-statement';
import {
  DurationExpressionContext,
  DurationParser,
  ParseDurationContext,
} from '$generated/DurationParser';
import { DurationLexer } from '$generated/DurationLexer';

export class DurationUtils {
  public static parse = (input: string): Duration => {
    const parser = DurationUtils.getParser(input);
    const errorListener = new DurationErrorListener();
    parser.addErrorListener(errorListener);

    try {
      const result = parser.parseDuration();

      const plain = DurationUtils.compute(result);
      return new Duration(plain);
    } catch (e) {
      throw new DurationParseError(errorListener);
    }
  };

  public static validate = (input: string): ValidationResult => {
    const parser = DurationUtils.getParser(input);
    const errorListener = new DurationErrorListener();
    parser.addErrorListener(errorListener);

    try {
      parser.parseDuration();

      return {
        errors: [],
        isValid: true,
      };
    } catch (e) {
      return {
        errors: errorListener.errors,
        isValid: false,
      };
    }
  };

  private static getParser = (input: string): DurationParser => {
    const chars = CharStreams.fromString(input);
    const lexer = new DurationLexer(chars);
    const tokens = new CommonTokenStream(lexer);
    return new DurationParser(tokens);
  };

  private static compute = (context: ParseDurationContext): PlainDuration => {
    const childContext = context.duration() ?? context.durationExpression();

    if (childContext === undefined) {
      throw new Error('Invalid duration input provided.');
    }

    if (childContext instanceof DurationExpressionContext) {
      throw new Error(
        'Arithmetic operations on durations are not supported yet',
      );
    }

    return new DurationStatement(childContext).solve();
  };
}
