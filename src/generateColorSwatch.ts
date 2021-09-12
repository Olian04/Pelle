import { IColorSwatch } from './types/IColorSwatch';
import { IColorSwatchTemplate } from './types/IColorSwatchTemplate';

export const generateColorSwatch = <
  CT extends IColorSwatchTemplate,
  C extends IColorSwatch<CT>
>(
  template: CT,
  baseColor: string
): C =>
  Object.entries(template).reduce(
    (res, [k, f]) => ({
      ...res,
      [k]: f(baseColor),
    }),
    {} as C
  );
