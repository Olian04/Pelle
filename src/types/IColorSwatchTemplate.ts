export type IColorSwatchTemplate = {
  [key in string]: (color: string) => string;
};
