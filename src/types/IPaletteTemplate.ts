import { TemplateValue } from './TemplateValue';

export type IPaletteTemplate = {
  [k in string]: TemplateValue | IPaletteTemplate;
};
