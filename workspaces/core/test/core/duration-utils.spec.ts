import { DurationUtils } from '$core/duration-utils';
import { DurationParseError } from '$core/duration-parse-error';

describe('DurationUtils', () => {
  describe('#parse', () => {
    test('should parse string literal if literal is valid', () => {
      const inputLiteral = '1w 2d';
      const result = DurationUtils.parse(inputLiteral).toPlainDuration();
      expect(result.weeks).toEqual(1);
      expect(result.days).toEqual(2);
    });

    test('should parse string and produce valid plain duration', () => {
      const inputLiteral = '1w 1d 1h 1m 1s 1ms';
      const result = DurationUtils.parse(inputLiteral).toPlainDuration();
      expect(result.weeks).toEqual(1);
      expect(result.days).toEqual(1);
      expect(result.hours).toEqual(1);
      expect(result.minutes).toEqual(1);
      expect(result.seconds).toEqual(1);
      expect(result.millis).toEqual(1);
    });

    test('should throw error when duration literal is invalid', () => {
      const inputLiteral = '1d 2w';
      const exampleCall = () => DurationUtils.parse(inputLiteral);
      expect(exampleCall).toThrow(DurationParseError);
    });
  });

  describe('#validate', () => {
    test('should return false when duration literal is invalid', () => {
      const inputLiteral = '1d 2w';
      const result = DurationUtils.validate(inputLiteral);
      expect(result.isValid).not.toBeTruthy();
    });

    test('should return true when duration literal is invalid', () => {
      const inputLiteral = '1w 2d';
      const result = DurationUtils.validate(inputLiteral);
      expect(result.isValid).toBeTruthy();
    });
  });
});
