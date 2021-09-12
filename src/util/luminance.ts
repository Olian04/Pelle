import { hslToRgb } from './convert';
import { decomposeColor } from './decomposeColor';

export const getLuminance = (color: string): number => {
  const decomposedColor = decomposeColor(color);

  let rgb =
    decomposedColor.type === 'hsl'
      ? decomposeColor(hslToRgb(color)).values
      : decomposedColor.values;
  rgb = rgb.map((val) => {
    if (decomposedColor.type !== 'color') {
      val /= 255; // normalized
    }
    return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
  });

  // Truncate at 3 digits
  return Number(
    (0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3)
  );
};
