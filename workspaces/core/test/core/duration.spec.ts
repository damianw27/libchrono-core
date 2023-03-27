import { DurationUtils } from '$core/duration-utils';

describe('Duration', () => {
  describe('#add', () => {
    test('should return 1w 1d 500ms after adding 1d with 1w and with 500ms', () => {
      const duration1 = DurationUtils.parse('1d');
      const duration2 = DurationUtils.parse('1w');
      const duration3 = DurationUtils.parse('500ms');
      const result = duration1.add(duration2).add(duration3);
      expect(result.toStringLiteral()).toEqual('1w 1d 500ms');
    });

    test('should return 1w 500ms after adding 1w and with 500ms', () => {
      const duration1 = DurationUtils.parse('1w');
      const duration2 = DurationUtils.parse('500ms');
      const result = duration1.add(duration2);
      expect(result.toStringLiteral()).toEqual('1w 500ms');
    });
  });

  describe('#sub', () => {
    test('should return 23h after subtracting 1h from 1d', () => {
      const duration1 = DurationUtils.parse('1d');
      const duration2 = DurationUtils.parse('1h');
      const result = duration1.sub(duration2);
      expect(result.toStringLiteral()).toEqual('23h');
    });
  });

  describe('#mul', () => {
    test('should return 2d after multiplying 1d with 2', () => {
      const duration1 = DurationUtils.parse('1d');
      const result = duration1.mul(2);
      expect(result.toStringLiteral()).toEqual('2d');
    });

    test('should return 1d 12h after multiplying 1d with 1.5', () => {
      const duration1 = DurationUtils.parse('1d');
      const result = duration1.mul(1.5);
      expect(result.toStringLiteral()).toEqual('1d 12h');
    });
  });

  describe('#div', () => {
    test('should return 2d after dividing 4d with 2', () => {
      const duration1 = DurationUtils.parse('4d');
      const result = duration1.div(2);
      expect(result.toStringLiteral()).toEqual('2d');
    });

    test('should return 16h after dividing 1d with 1.5', () => {
      const duration1 = DurationUtils.parse('1d');
      const result = duration1.div(1.5);
      expect(result.toStringLiteral()).toEqual('16h');
    });

    test('should throw error when dividing by zero', () => {
      const duration1 = DurationUtils.parse('1d');
      const testCallback = () => duration1.div(0);
      expect(testCallback).toThrow('Division by zero is not allowed');
    });
  });

  describe('#getWeeks', () => {
    test('should return 0 when week is not provided', () => {
      const duration1 = DurationUtils.parse('1d');
      expect(duration1.getWeeks()).toEqual(0);
    });

    test('should return 10 for 10w 24h', () => {
      const duration1 = DurationUtils.parse('10w 24h');
      expect(duration1.getWeeks()).toEqual(10);
    });

    test('should return 12 for 10w 20d', () => {
      const duration1 = DurationUtils.parse('10w 20d');
      expect(duration1.getWeeks()).toEqual(12);
    });
  });

  describe('#getDays', () => {
    test('should return 0 when week is not provided', () => {
      const duration1 = DurationUtils.parse('1w');
      expect(duration1.getDays()).toEqual(0);
    });

    test('should return 10 for 10w 24h', () => {
      const duration1 = DurationUtils.parse('6d');
      expect(duration1.getDays()).toEqual(6);
    });

    test('should return 12 for 10w 20d', () => {
      const duration1 = DurationUtils.parse('7d 48h');
      expect(duration1.getDays()).toEqual(2);
    });
  });

  describe('#getHours', () => {
    test('should return 0 when week is not provided', () => {
      const duration1 = DurationUtils.parse('1w');
      expect(duration1.getHours()).toEqual(0);
    });

    test('should return 10 for 10w 24h', () => {
      const duration1 = DurationUtils.parse('20h');
      expect(duration1.getHours()).toEqual(20);
    });

    test('should return 12 for 10w 20d', () => {
      const duration1 = DurationUtils.parse('24h 61m');
      expect(duration1.getHours()).toEqual(1);
    });
  });

  describe('#getMinutes', () => {
    test('should return 0 when minutes not provided', () => {
      const duration1 = DurationUtils.parse('1w');
      expect(duration1.getMinutes()).toEqual(0);
    });

    test('should return 10 for 10m', () => {
      const duration1 = DurationUtils.parse('10m');
      expect(duration1.getMinutes()).toEqual(10);
    });

    test('should return 1 for 60m 61s', () => {
      const duration1 = DurationUtils.parse('60m 61s');
      expect(duration1.getMinutes()).toEqual(1);
    });
  });

  describe('#getSeconds', () => {
    test('should return 0 when seconds not provided', () => {
      const duration1 = DurationUtils.parse('1w');
      expect(duration1.getSeconds()).toEqual(0);
    });

    test('should return 10 for 10s', () => {
      const duration1 = DurationUtils.parse('10s');
      expect(duration1.getSeconds()).toEqual(10);
    });

    test('should return 1 for 60s 1000ms', () => {
      const duration1 = DurationUtils.parse('60s 1000ms');
      expect(duration1.getSeconds()).toEqual(1);
    });
  });

  describe('#getMillis', () => {
    test('should return 0 when seconds not provided', () => {
      const duration1 = DurationUtils.parse('1w');
      expect(duration1.getMillis()).toEqual(0);
    });

    test('should return 500 for 500ms', () => {
      const duration1 = DurationUtils.parse('500ms');
      expect(duration1.getMillis()).toEqual(500);
    });

    test('should return 400 for 400ms', () => {
      const duration1 = DurationUtils.parse('1400ms');
      expect(duration1.getMillis()).toEqual(400);
    });
  });
});
