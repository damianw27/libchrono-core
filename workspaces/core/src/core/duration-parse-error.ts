import { DurationErrorListener } from '$core/duration-error-listener';
import { ParsingError } from '$core/types/parsing-error';

export class DurationParseError {
  public errors: ParsingError[];

  public constructor(private readonly errorListener: DurationErrorListener) {
    this.errors = errorListener.errors;
  }
}
