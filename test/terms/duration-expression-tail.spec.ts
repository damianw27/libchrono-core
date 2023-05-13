import { AntlrMocks } from '$test/_helpers_/antlr-mocks';
import { DurationExpressionTail } from '$terms/duration-expression-tail';
import { ExpressionOperator } from '$terms/types/expression-operator';

describe('DurationExpressionTail', () => {
  const antlrMocks = new AntlrMocks();

  describe('#of', () => {
    test('creates DurationExpressionTail with SUB operator if ADD is undefined', () => {
      const context = antlrMocks.durationExpressionTailContextSubMock;
      const result = DurationExpressionTail.of(context);
      expect(result.getOperator()).toBe(ExpressionOperator.SUB);
    });

    test('creates DurationExpressionTail with ADD operator if ADD is defined', () => {
      const context = antlrMocks.durationExpressionTailContextAddMock;
      const result = DurationExpressionTail.of(context);
      expect(result.getOperator()).toBe(ExpressionOperator.ADD);
    });
  });

  describe('#apply', () => {
    test('applies SUB operator and returns the difference of timestamp and expression solve result', () => {
      const context = antlrMocks.durationExpressionTailContextSubMock;
      const result = DurationExpressionTail.of(context);
      expect(result.apply(21577290200)).toBe(20000000000);
    });

    test('applies ADD operator and returns the sum of timestamp and expression solve result', () => {
      const context = antlrMocks.durationExpressionTailContextAddMock;
      const result = DurationExpressionTail.of(context);
      expect(result.apply(100)).toBe(1577290300);
    });
  });
});
