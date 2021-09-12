import { generateColorSwatch } from './generateColorSwatch';
import { ExpandType } from './types/ExpandType';
import { IColorSwatch } from './types/IColorSwatch';
import { IColorSwatchTemplate } from './types/IColorSwatchTemplate';
import { IPalette } from './types/IPalette';
import { IPaletteTemplate } from './types/IPaletteTemplate';

export const createPaletteConstructor =
  <CT extends IColorSwatchTemplate>(swatchTemplate: CT) =>
  <
    T extends IPaletteTemplate,
    P extends IPalette<T, ExpandType<IColorSwatch<CT>>>
  >(
    template: T
  ): P =>
    Object.entries(template).reduce(
      (res, [k, v]) => ({
        ...res,
        [k]:
          typeof v === 'string'
            ? generateColorSwatch(swatchTemplate, v)
            : createPaletteConstructor(swatchTemplate)(v),
      }),
      {} as P
    );
