import { DurationParser } from '$generated/DurationParser';
import { DurationLexer } from '$generated/DurationLexer';
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { DurationErrorListener } from '$core/duration-error-listener';

const isInputParsable = (input: string): boolean => {
  const chars = CharStreams.fromString(input);
  const lexer = new DurationLexer(chars);
  const tokens = new CommonTokenStream(lexer);
  const errorListener = new DurationErrorListener();
  const parser = new DurationParser(tokens);
  parser.removeErrorListeners();
  parser.addErrorListener(errorListener);
  parser.buildParseTree = true;
  parser.parseDuration();
  return errorListener.errors.length === 0;
}

describe('DurationParser', () => {
  const examples = [
    '1w2d3h4m5s6ms',
    '(1w2d*1)+3h4m5s6ms',
    '1w+(2d3h/3)-4m5s6ms',
    '1.5w',
    '1w*2',
    '(1w*2)-3h',
    '1w+2d',
    '(1w+2d)-3h',
    '1w-2d',
    '(1w-2d)+3h',
    '1w+2d*3',
    '1w-2d/3',
  ];

  describe('#parseDuration', () => {
    examples.forEach((input) => {
      test(`should parse input "${input}" without any problems`, () => {
        expect(isInputParsable(input)).toBeTruthy();
      });
    });
  });
});
