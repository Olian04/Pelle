import { ColorString } from './ColorString';

export type IPaletteTemplate = {
  [k in string]: ColorString | IPaletteTemplate;
};
