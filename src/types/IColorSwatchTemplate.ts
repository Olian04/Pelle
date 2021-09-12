import { ColorString } from './ColorString';

export type IColorSwatchTemplate = {
  [key in string]: (color: ColorString) => ColorString;
};
