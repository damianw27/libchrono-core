import { ParsingError } from '$core/types/parsing-error';

export class DurationErrorListener {
  public readonly errors: ParsingError[];

  public constructor() {
    this.errors = [];
  }

  // eslint-disable-next-line max-params
  public syntaxError = (
    recognizer: any,
    offendingSymbol: any,
    line: number,
    column: number,
    msg: string,
    e: any,
  ): void => {
    const parserError: ParsingError = {
      charPosition: column,
      message: msg,
    };

    this.errors.push(parserError);
  };

  // eslint-disable-next-line max-params
  public reportAmbiguity = (
    recognizer: any,
    dfa: any,
    startIndex: number,
    stopIndex: number,
    exact: boolean,
    ambigAlts: any,
    configs: any,
  ): void => {};

  // eslint-disable-next-line max-params
  public reportAttemptingFullContext = (
    recognizer: any,
    dfa: any,
    startIndex: number,
    stopIndex: number,
    conflictingAlts: any,
    configs: any,
  ): void => {};

  // eslint-disable-next-line max-params
  public reportContextSensitivity = (
    recognizer: any,
    dfa: any,
    startIndex: number,
    stopIndex: number,
    conflictingAlts: any,
    configs: any,
  ): void => {};
}
