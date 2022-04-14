import { common } from '../../color/common';
import { ColorString } from '../../types/ColorString';
import { clamp } from '../clamp';
import { decomposeColor } from './decomposeColor';
import { getLuminance } from './luminance';
import { recomposeColor } from './recomposeColor';

export const getContrastRatio = (
  foreground: string,
  background: string
): number => {
  const lumA = getLuminance(foreground);
  const lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
};

export function alpha(color: string, value: number): string {
  const decomposedColor = decomposeColor(color);
  value = clamp(value);

  if (decomposedColor.type === 'rgb' || decomposedColor.type === 'hsl') {
    decomposedColor.type += 'a';
  }
  if (decomposedColor.type === 'color') {
    decomposedColor.values[3] = `/${value}`;
  } else {
    decomposedColor.values[3] = value;
  }

  return recomposeColor(decomposedColor);
}

export const getContrastText = (
  background: ColorString,
  contrastThreshold = 3
) => {
  const contrastText =
    getContrastRatio(background, common.white) >= contrastThreshold
      ? common.white
      : common.black;

  return contrastText;
};
