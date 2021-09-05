# Pelle

Heavily inspired by the [theme palette provided by material ui](https://material-ui.com/customization/palette/).

```ts
import { Palette } from 'pelle';

const palette = Palette({
  primary: '#5865f2',
});

palette.primary.main  // #5865f2
palette.primary.light // Slightly lighter than #5865f2
palette.primary.dark  // Slightly darker than #5865f2
palette.primary.text  // Either white or black, for best readability
```

Resources: 

* How material ui creates their palette: https://github.com/mui-org/material-ui/blob/5a983eadb806ba095de2a2754b208d470e3f55e7/packages/material-ui/src/styles/createPalette.js
* Test tool for different auto palettes: https://www.sessions.edu/color-calculator/
* Initial POC: [typescript playground](https://www.typescriptlang.org/play?#code/C4TwDgpgBAogHmAhgOwCYBVwQDzoHxQC8U6UEcwEaAzlAPYBGAVhAMbABQUUA-CWRSqpaAS2QAzCACcoAeV5QA3lADaAaShioAawgg64uQF0AXLAQoMWbLPVGCAXyhnkEAG7SuzkgG4OHUEgSCABbMAAbREoANURwgFdoQi9uAAMAYgASRWpgKTEAcwdUqAAfFKhUqQKGAAps5HiQhmkHABoGppapds7m1oBKEvLuNOqGRHrFRv6ejumu1vmZ7t6F2YchvwCsKABJAAU4iGBKdFCIqKSlVW1NZChc-OQC02CwyJi4xLL9o-CTmcLp9oA5-IFoHsAMJ0cJ0KQAZQA7lFWAALIhKCohRBiMxPQp+UZQcIiApo4D4vKEiqoRBSbRU54FImjSgUJk0sE7IKHY6nHCkciUGh-flAj5XAjERQVFR3LS6fSGdBvdDyowCEXCMUAgXnSWUKAVYl8Pl6yi4DV4E2jMzQ2Hw5GotF+bmsOjIXJQApUaRXGFwxEo4DozG1CbUCCB+Gcl4De0x4MuogEWqy4k4vFQSPRx1SNoVUnkyk5xBRpOF4l0hlmXOVirs0v1-OFzbbD1e4BQf6A664LVCWjmvsGy6UPC1SiGiBmdAJ3V93DSm3E2TMNjAAB0VGpEGoU+BVwGW6kEFQ8VYEFqtTP1DatwfbiMA1TUHTtu4W+-d6rxNGGpmBCBhQG4RCEMQADkBIvJBCi+q4UgBvmzqhmitRuK+Zi9gKGEDH+3CbA+iibFA5ZkcgIAdp63pIBa1w4ZQH7EmA+Q4lIIBmJB6QAMw8QALPxqCoJBBFQJQuRceMtQAIwPjxABMclQAArPxAyiRUaJkmixYUmYGb-twrEiOxnFQNxwniOIKkqZpRncFGnY1uZ3G2VZ4j2aMYLtv4nbULCEBbnCBS1HRfYDH4QA)

## Extended features (planned but not in MVP)

### Color Helpers

```ts
import { 
  Palette,
  red, green, blue, grey, white,
  lighten, darken, mix, complement,
} from 'pelle';

const palette = Palette({
  primary: '#5865f2',
  highlight: {
    success: green[200],
    error: red[200],
    log: blue[400],
    info: grey[10],
  },
  secondary: darken(`#66ffff`),
  tertiary: mix(red[200], white, 0.7),
  extra: complement(`#55ddff`),
});
```

