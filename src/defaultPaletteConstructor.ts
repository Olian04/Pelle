import { createPaletteConstructor } from './createPaletteConstructor';
import { ColorString } from './types/ColorString';
import { lighten, darken, contrastText } from './util/api';

const identity = (color: ColorString) => color;
export const Palette = createPaletteConstructor({
  main: identity,
  light: lighten,
  dark: darken,
  text: contrastText,
});
