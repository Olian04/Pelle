export const clamp = (value: number, min = 0, max = 1): number =>
  Math.min(Math.max(min, value), max);
