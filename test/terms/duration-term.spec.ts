import { AntlrMocks } from '$test/_helpers_/antlr-mocks';
import { DurationTerm } from '$terms/duration-term';

describe('DurationTerm', () => {
  const antlrMocks = new AntlrMocks();

  describe('#of', () => {
    test('should return a DurationTerm instance with no tails', () => {
      const context = antlrMocks.durationTermContext2Mock;
      const result = DurationTerm.of(context);
      expect(result).toBeInstanceOf(DurationTerm);
      expect(result.solve()).not.toBe(NaN);
    });

    test('should return a DurationTerm instance with tails', () => {
      const context = antlrMocks.durationTermContext1Mock;
      const result = DurationTerm.of(context);
      expect(result).toBeInstanceOf(DurationTerm);
      expect(result.solve()).not.toBe(NaN);
    });
  });

  describe('#solve', () => {
    test('should solve the duration term without tails', () => {
      const context = antlrMocks.durationTermContext2Mock;
      const result = DurationTerm.of(context);
      expect(result.solve()).toBe(173045100);
    });

    test('should solve the duration term with tails', () => {
      const context = antlrMocks.durationTermContext1Mock;
      const result = DurationTerm.of(context);
      expect(result.solve()).toBe(1577290200);
    });
  });
});
