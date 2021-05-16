# color-palette

Heavily inspired by the [theme palette provided by material ui](https://material-ui.com/customization/palette/).

```ts
import {Palette, green, red, black} from 'color-palette';

const palette = new Palette({
  primary: '#5865f2',
});

// Colors (eagerly computed)
palette.primary.main // #5865f2
palette.primary.light // slightly lighter
palette.primary.dark // slightly darker
palette.primary.text // Either white or black, for best readability
```

Resources: 

* How material ui creates their palette: https://github.com/mui-org/material-ui/blob/5a983eadb806ba095de2a2754b208d470e3f55e7/packages/material-ui/src/styles/createPalette.js
* Test tool for different auto palettes: https://www.sessions.edu/color-calculator/
* Initial POC: [typescript playground](https://www.typescriptlang.org/play?#code/C4TwDgpgBAwg9gGzgJygXigbwFBT1AWwEMBLAOwC4oBnYZcgcwG5d8ESGALYK2+s5qzwATIsgDWvOoxb4owCAA8eNaQJYBfbNgDGcMrSg7kEIgvhJUGABQAjItQhT+DAJRULKdAD4o1nHLE5FT2jgA0QlDsXCqhEBFyohIhDvGRCsop4dgarizYoJBQAPrFAApECAgQwAA8ACpQSgpkwtRQcLYAVhA6wGFQANJNyhCt7eIQIHAAZlD1AwDivhgB+ADa4lDkQwC6VPWbuyMtbR3dvcBQAPwl5ZXVdYfiuwOT03PPr1DLUFSLUByBXA0AAQqkKlUag0TmMzp0en0VndIY8Gm8prN5gM+IxvCxCtBPMhUdDGs04e0EZdkaVSU8MR9sbBECh8dpdPpDPT0FAYRTxudEcBvHYIQ8alRwY56Q1vO4WZZZfUVr41ng9AYrnolRKrqsNFAHFgoJtnIx9kLLlAAD6qFxQDSyfAzLzWR6m8QDABuxyxAHkLn0AHRjaQQai1al9W32vFimV61yuLCROQkObWQlY73oNAYADk0eABZT6rkFc1hjIEYUwh5GHp1m9eTTFY1rJJeqOvJrtAg9b1zvbWnbeAgCEcqbHlc79J7GGMpnMnebrZno-wm7wJmAAFdkGQjHO9Ub2sTleytJytVAwKfG3r-JEwPRiMgQFQCwBiABMAA5fwANl-AAxAsIlyfJ7yhYBg1fEh3xAYMgjIIA)

## Extended features (planned but no in MVP)

### Color Helpers

```ts
import { Palette, green, red, blue, black, white } from 'color-palette';

const palette = new Palette({
  primary: '#5865f2',
  highlight: {
    success: green[200],
    error: red[200],
    log: blue[400],
    info: black[10],
  },
});
```

### Auto Palettes

```ts
import { Palette } from 'color-palette';

const palette = new Palette({
  primary: '#5865f2',
});

// Auto palette (lazily computed)
palette.primary.complementary // The complementary color
palette.primary.monochromatic // The monocromatic color
palette.primary.analogous // Array of 2 analogous colors
palette.primary.splitComplementary // Array of 2 split complementary colors
palette.primary.triadic // Array of 2 triadic colors
palette.primary.tetradic // Array of 3 tetradic colors

// Auto palette colors
palette.primary.triadic[0].main
palette.primary.triadic[0].dark
palette.primary.triadic[0].light
palette.primary.triadic[0].text
```

### Auto Fill

```ts
import { Palette, auto } from 'color-palette';

const palette = new Palette({
  primary: '#5865f2',
  secondary: auto.primary.complementary,
  text: auto.primary.text,
});

palette.primary.complementary === pallet.secondary.main
palette.primary.text === pallet.text.main
```
