import { DecomposedColor } from '../types/DecomposedColor';
import { hexToRgb } from './convert';

export const decomposeColor = (color: string): DecomposedColor => {
  // Idempotent
  const maybeColor = color as any as DecomposedColor;
  if (maybeColor.type) {
    return maybeColor;
  }

  if (color.charAt(0) === '#') {
    return decomposeColor(hexToRgb(color));
  }

  const marker = color.indexOf('(');
  const type = color.substring(0, marker);

  if (['rgb', 'rgba', 'hsl', 'hsla', 'color'].indexOf(type) === -1) {
    throw new Error(
      `Pelle: Unsupported '${color}' color.\n` +
        'The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().'
    );
  }

  let valueString = color.substring(marker + 1, color.length - 1);
  let colorSpace!: string;
  let values: string[];

  if (type === 'color') {
    values = valueString.split(' ');
    colorSpace = values.shift() as string;
    if (values.length === 4 && values[3].charAt(0) === '/') {
      values[3] = values[3].substr(1);
    }
    if (
      ['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].indexOf(
        colorSpace
      ) === -1
    ) {
      throw new Error(
        'Pelle: unsupported `' +
          colorSpace +
          '` color space.\n' +
          'The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.'
      );
    }
  } else {
    values = valueString.split(',');
  }
  const valueNumberArr = values.map((value) => parseFloat(value));

  return { type, values: valueNumberArr, colorSpace };
};
