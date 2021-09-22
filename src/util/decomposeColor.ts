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

  if (['rgb', 'rgba', 'hsl', 'hsla'].indexOf(type) === -1) {
    throw new Error(
      `Pelle: Unsupported '${color}' color.\n` +
        'The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()'
    );
  }

  let values: string[] = color.substring(marker + 1, color.length - 1).split(',');

  const valueNumberArr = values.map((value) => parseFloat(value));

  return { type, values: valueNumberArr };
};
