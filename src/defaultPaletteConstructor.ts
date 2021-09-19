import { createPaletteConstructor } from './createPaletteConstructor';
import { IColorSwatchTemplate } from './types/IColorSwatchTemplate';
import { lighten, darken, contrastText } from './util/api';

export const defaultColorSwatchTemplate: IColorSwatchTemplate = {
  main: (_) => _,
  light: lighten,
  dark: darken,
  text: contrastText,
};
export const defaultPaletteConstructor = createPaletteConstructor(defaultColorSwatchTemplate);
