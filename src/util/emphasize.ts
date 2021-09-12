import { darken } from './darken';
import { lighten } from './lighten';
import { getLuminance } from './luminance';

export const emphasize = (color: string, coefficient = 0.15): string => {
  return getLuminance(color) > 0.5
    ? darken(color, coefficient)
    : lighten(color, coefficient);
};
