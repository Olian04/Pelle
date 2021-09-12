import { decomposeColor } from './decomposeColor';
import { recomposeColor } from './recomposeColor';

export const hexToRgb = (color: string): string => {
  color = color.substr(1);

  const re = new RegExp(`.{1,${color.length >= 6 ? 2 : 1}}`, 'g');
  let colors = color.match(re);

  if (colors && colors[0].length === 1) {
    colors = colors.map((n) => n + n);
  }

  return colors
    ? `rgb${colors.length === 4 ? 'a' : ''}(${colors
        .map((n, index) => {
          return index < 3
            ? parseInt(n, 16)
            : Math.round((parseInt(n, 16) / 255) * 1000) / 1000;
        })
        .join(', ')})`
    : '';
};

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

export const hslToRgb = (color: string): string => {
  const decomposedColor = decomposeColor(color);
  const { values } = decomposedColor;
  const h = values[0];
  const s = values[1] / 100;
  const l = values[2] / 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number, k = (n + h / 30) % 12) =>
    l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);

  let type = 'rgb';
  const rgb = [
    Math.round(f(0) * 255),
    Math.round(f(8) * 255),
    Math.round(f(4) * 255),
  ];

  if (decomposedColor.type === 'hsla') {
    type += 'a';
    rgb.push(values[3]);
  }

  return recomposeColor({ type, values: rgb });
};
