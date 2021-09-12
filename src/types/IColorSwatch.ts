import { IColorSwatchTemplate } from './IColorSwatchTemplate';

export type IColorSwatch<T extends IColorSwatchTemplate> = {
  [k in keyof T]: ReturnType<T[k]>;
};
