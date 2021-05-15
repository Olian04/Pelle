# color-pallet

Heavily inspired by the [theme pallet provided by material ui](https://material-ui.com/customization/palette/).

```ts
import {Pallet, green, red, black} from 'color-pallet';

const pallet = new Pallet({
  primary: '#5865f2',
});

// Colors (eagerly computed)
pallet.primary.main // #5865f2
pallet.primary.light // slightly lighter
pallet.primary.dark // slightly darker
pallet.primary.text // Either white or black, for best readability
```

Resources: 

* How material ui creates their pallet: https://github.com/mui-org/material-ui/blob/5a983eadb806ba095de2a2754b208d470e3f55e7/packages/material-ui/src/styles/createPalette.js#L94
* Test tool for different auto pallets: https://www.sessions.edu/color-calculator/

## Extended features (planned but no in MVP)

### Color Helpers

```ts
import { Pallet, green, red, blue, black, white } from 'color-pallet';

const pallet = new Pallet({
  primary: '#5865f2',
  highlight: {
    success: green[200],
    error: red[200],
    log: blue[400],
    info: black[10],
  },
});
```

### Auto Pallets

```ts
import { Pallet } from 'color-pallet';

const pallet = new Pallet({
  primary: '#5865f2',
});

// Auto pallet (lazily computed)
pallet.primary.complementary // The complementary color
pallet.primary.monochromatic // The monocromatic color
pallet.primary.analogous // Array of 2 analogous colors
pallet.primary.splitComplementary // Array of 2 split complementary colors
pallet.primary.triadic // Array of 2 triadic colors
pallet.primary.tetradic // Array of 3 tetradic colors

// Auto pallet colors
pallet.primary.triadic[0].main
pallet.primary.triadic[0].dark
pallet.primary.triadic[0].light
pallet.primary.triadic[0].text
```

### Auto Fill

```ts
import { Pallet, auto } from 'color-pallet';

const pallet = new Pallet({
  primary: '#5865f2',
  secondary: auto.primary.complementary,
  text: auto.primary.text,
});

pallet.primary.complementary === pallet.secondary.main
pallet.primary.text === pallet.text.main
```
