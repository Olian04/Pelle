import { ColorString } from './api';
import { createPaletteConstructor } from './createPaletteConstructor';
import { lighten, darken, contrastText } from './util/api';

// NOTE: Do not use "defaultColorSwatchTemplate: IColorSwatchTemplate"
// as it ruins the type inference of palettes constructed using "defaultPaletteConstructor"
export const defaultColorSwatchTemplate = {
  main: (_: ColorString) => _,
  light: lighten,
  dark: darken,
  text: contrastText,
};

export const defaultPaletteConstructor = createPaletteConstructor(
  defaultColorSwatchTemplate
);
