import { IColorSwatch } from './types/IColorSwatch';
import { IColorSwatchTemplate } from './types/IColorSwatchTemplate';
import { ColorString } from './types/ColorString';

export const generateColorSwatch = <
  CT extends IColorSwatchTemplate,
  C extends IColorSwatch<CT>
>(
  template: CT,
  baseColor: ColorString
): C =>
  Object.entries(template).reduce(
    (res, [k, f]) => ({
      ...res,
      [k]: f(baseColor),
    }),
    {} as C
  );
