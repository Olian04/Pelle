export type TemplateValue =
  | `#${string}`
  | `rgb(${number},${number},${number})`
  | `rgba(${number},${number},${number},${number})`;
