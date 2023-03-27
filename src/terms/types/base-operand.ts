import { PlainDuration } from '$core/types/plain-duration';

export interface BaseOperand {
  readonly solve: () => PlainDuration;
}
