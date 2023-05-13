import { CharStreams } from 'antlr4ts';
import { DurationLexer } from '$generated/DurationLexer';
import { DurationErrorListener } from '$core/duration-error-listener';

const getLexer = (input: string): DurationLexer => {
  const chars = CharStreams.fromString(input);
  return new DurationLexer(chars);
}

const isValidLexerInput = (input: string): boolean => {
  const errorListener = new DurationErrorListener();
  const lexer = getLexer(input);
  lexer.removeErrorListeners();
  lexer.addErrorListener(errorListener);
  lexer.nextToken();
  return errorListener.errors.length === 0;
};

describe('DurationLexer', () => {
  test('should return correct token stream for valid input', () => {
    const input = '1d12h30m';

    const expectedTokens = [
      { type: '13', text: '1' },
      { type: '8', text: 'd' },
      { type: '13', text: '12' },
      { type: '9', text: 'h' },
      { type: '13', text: '30' },
      { type: '10', text: 'm' },
      { type: 'EOF', text: '' },
    ];

    const lexer = getLexer(input)
    const actualTokens = [];

    let token = lexer.nextToken();

    while (token.type !== DurationLexer.EOF) {
      actualTokens.push({ type: token.type.toString(), text: token.text });
      token = lexer.nextToken();
    }

    actualTokens.push({ type: 'EOF', text: '' });

    expect(actualTokens).toEqual(expectedTokens);
  });

  test('should accept valid input', () => {
    const input = '1d12h30m';
    expect(isValidLexerInput(input)).toBeTruthy();
  });

  test('should not accept invalid input', () => {
    const input = 'invalid input';
    expect(isValidLexerInput(input)).not.toBeTruthy();
  });
});
