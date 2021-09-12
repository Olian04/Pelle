export type ExpandType<T> = T extends object
  ? T extends infer O
    ? { [K in keyof O]: ExpandType<O[K]> }
    : never
  : T;
