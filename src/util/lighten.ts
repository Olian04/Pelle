import { clamp } from './clamp';
import { decomposeColor } from './decomposeColor';
import { recomposeColor } from './recomposeColor';

export const lighten = (color: string, coefficient: number = 0.15): string => {
  const decomposedColor = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (decomposedColor.type.indexOf('hsl') !== -1) {
    decomposedColor.values[2] +=
      (100 - decomposedColor.values[2]) * coefficient;
  } else if (decomposedColor.type.indexOf('rgb') !== -1) {
    for (let i = 0; i < 3; i += 1) {
      decomposedColor.values[i] +=
        (255 - decomposedColor.values[i]) * coefficient;
    }
  } else if (decomposedColor.type.indexOf('color') !== -1) {
    for (let i = 0; i < 3; i += 1) {
      decomposedColor.values[i] +=
        (1 - decomposedColor.values[i]) * coefficient;
    }
  }

  return recomposeColor(decomposedColor);
};
