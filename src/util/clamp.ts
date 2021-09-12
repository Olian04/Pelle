export const clamp = (value: number, min = 0, max = 1): number => {
  if (process.env.NODE_ENV !== 'production') {
    if (value < min || value > max) {
      console.error(
        `Pelle: The value provided ${value} is out of range [${min}, ${max}].`
      );
    }
  }

  return Math.min(Math.max(min, value), max);
};
