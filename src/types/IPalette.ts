import { IPaletteTemplate } from './IPaletteTemplate';

export type IPalette<T extends IPaletteTemplate, ColorSwatch> = {
  [k in keyof T]: T[k] extends IPaletteTemplate
    ? IPalette<T[k], ColorSwatch>
    : ColorSwatch;
};
