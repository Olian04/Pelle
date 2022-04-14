import { decomposeColor } from "../color/decomposeColor";

const intToHex = (int: number): string => {
  const hex = int.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
};

export const rgbToHex = (color: string): string => {
  // Idempotent
  if (color.indexOf('#') === 0) {
    return color;
  }

  const { values } = decomposeColor(color);
  return `#${values
    .map((n, i) => intToHex(i === 3 ? Math.round(255 * n) : n))
    .join('')}`;
};
