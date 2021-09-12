import { createPaletteConstructor } from './createPaletteConstructor';
import { lighten, darken, contrastText } from './util/api';

const identity = (color: string) => color;
export const Palette = createPaletteConstructor({
  main: identity,
  light: lighten,
  dark: darken,
  text: contrastText,
});
