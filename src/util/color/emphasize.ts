import { ColorString } from '../../types/ColorString';
import { darken } from './darken';
import { lighten } from './lighten';
import { getLuminance } from './luminance';

export const emphasize = (color: ColorString, coefficient = 0.15) => {
  return getLuminance(color) > 0.5
    ? darken(color, coefficient)
    : lighten(color, coefficient);
};
