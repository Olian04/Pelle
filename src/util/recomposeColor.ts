import { DecomposedColor } from '../types/DecomposedColor';

export const recomposeColor = (color: DecomposedColor): string => {
  const { type, colorSpace } = color;
  let values = color.values as (number | string)[];

  if (type.indexOf('rgb') !== -1) {
    // Only convert the first 3 values to int (i.e. not alpha)
    values = values.map((n, i) => (i < 3 ? parseInt(n as any, 10) : n));
  } else if (type.indexOf('hsl') !== -1) {
    values[1] = `${values[1]}%`;
    values[2] = `${values[2]}%`;
  }
  if (type.indexOf('color') !== -1) {
    return `${type}(${colorSpace} ${values.join(' ')})`;
  } else {
    return `${type}(${values.join(', ')})`;
  }
};
