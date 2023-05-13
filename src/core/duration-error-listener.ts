import { ParsingError } from '$core/types/parsing-error';

export class DurationErrorListener {
  public readonly errors: ParsingError[];

  public constructor() {
    this.errors = [];
  }

  // eslint-disable-next-line max-params
  public syntaxError = (r: any, oSymbol: any, line: number, column: number, msg: string): void => {
    const parserError: ParsingError = {
      charPosition: column,
      message: msg,
    };

    this.errors.push(parserError);
  };

  public reportAmbiguity = (): void => {};

  public reportAttemptingFullContext = (): void => {};

  public reportContextSensitivity = (): void => {};
}
