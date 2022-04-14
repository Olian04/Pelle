import { ColorString } from './exports/api';
import { createPaletteConstructor } from './createPaletteConstructor';
import { getContrastText } from './util/color/contrast';
import { darken } from './util/color/darken';
import { lighten } from './util/color/lighten';

// NOTE: Do not use "defaultColorSwatchTemplate: IColorSwatchTemplate"
// as it ruins the type inference of palettes constructed using "defaultPaletteConstructor"
export const defaultColorSwatchTemplate = {
  main: (_: ColorString) => _,
  light: lighten,
  dark: darken,
  text: getContrastText,
};

export const defaultPaletteConstructor = createPaletteConstructor(
  defaultColorSwatchTemplate
);
