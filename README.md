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
* Initial POC:
  * Dynamic version [typescript playground](https://www.typescriptlang.org/play?target=8#code/C4TwDgpgBAogHmAhgOwCYBVwQDzoHxQC8U6UEcwEaAzlAPYBGAVhAMbABQUUA-CWRSqpaAS2QAzCACcoAeV5QA3lADaAaShioAawgg64uQF0AXLAQoMWbLPVGCAXyhnkEAG7SuzkgG4OHUEgSCABbMAAbREoANURwgFdoQi9uAAMAYgASRWpgKTEAcwdUqAAfFKhUqQKGAAps5HiQhmkHABoGppapds7m1oBKEvLuNOqGRHrFRv6ejumu1vmZ7t6F2YchvwCsKABJAAU4iGBKdFCIqKSlKAqVbU1kKFz85ALTYLDImLjEsv2juETmcLt8IH4HP5AtA9gBhOjhOhSADKAHcoqwABbnL5XIhKO66ECPZ55QofWqsBFIswvQoDIgEOlvHy3SE7IJw6ko9HALG4ASUGj7eGInkY7Ggq4EYiKQkkokGEgfABKJ3iUmQmEguHu9ghUN2h2OpxwpHIQuEAJNINxlDaUFFSLREplBNGqgeWkVhnQH3QesFQloxqBppxl0otw9Hr4oeBZr1Dqd4r5mLwFQ9ZhTLrTBo4VOQuSgBSo0iuOd5WPx2AqsPNgmFXLFuaxEbBDrrQablYl2HrGbwtUodog2fQDom1AgKdpZLeA2zjIqsmYbGAADoqGSINRh1LKAMN1IIKh4qwILVaifqA77g7xEYGYQCLU5THRhuvze2pnRnqzHEWopxnbkBl-D1NgdRQnEQWhYQGbZC2LVgTyuQEE3hIs8nPYAkRrOsG0tENezTdsrg4IdqCrSVR3HZ8CFrD0iODa0w1tSMIAg0YDm7K141NXAHXgJA0G1HBm2dGj+3wPBB33OiSEXKBeJfFc13YLdkB3PcR04o8TzPC8rx-T0HTcJ9GSgN8-24L9j13biPwAqBoSVNwiEIYgAHJmQKbzow-GM+FLVwpArblW0xWpqIlcj7SgNwGVsmMzFQiB0JtUDsKkXCkRimj4ogAZaiSpyoCgpRYNoA5EP8ZDgE0VBtxEUB8Upbk51eAoGKgKkxT8BqoHCEQCkxIV2v6mlSW63qpqkQa6GwqBUEQKRdCeYgOrFLr6Ss+bFuWws8jgxqtvm3aF327lDuLDDTXxdLMvY7KXjyqQbI9EJEDEMwRGa7TWpAcqRrG4AzFB8aqHK1b1rMWGNvKygKDSpaTtyX9NiQpbiyQF78XuyhPtGMB8m+qQQDMbz0gAZhpgAWenUFQbykd3cGoG88ZagARgdGmACY+agABWemBlZipMVGzFIY598gtJkRycpzn0mZ8RxBFkXJaC542CW2HVep7WNfEXXRkhLH6pxhEIA3REClqPGEzqoA)
  * Static version [typescript playground](https://www.typescriptlang.org/play?#code/C4TwDgpgBAogHmAhgOwCYBVwQDzoHxQC8U6UEcwEaAzlAPYBGAVhAMbABQUUA-CWRSqpaAS2QAzCACcoAeV5QA3lADaAaShioAawgg64uQF0AXLAQoMWbLPVGCAXyhnkEAG7SuzkgG4OHUEgSCABbMAAbREoANURwgFdoQi9uAAMAYgASRWpgKTEAcwdUqAAfFKhUqQKGAAps5HiQhmkHABoGppapds7m1oBKEvLuNOqGRHrFRv6ejumu1vmZ7t6F2YchvwCsKABJAAU4iGBKdFCIqKSlVW1NZChc-OQC02CwyJi4xLL9o-CTmcLp9oA5-IFoHsAMJ0cJ0KQAZQA7lFWAALIhKCohRBiMxPQp+UZQcIiApo4D4vKEiqoRBSbRU54FImjSgUJk0sE7IKHY6nHCkciUGh-flAj5XAjERQVFR3LS6fSGdBvdDyowCEXCMUAgXnSWUKAVYl8Pl6yi4DV4E2jMzQ2Hw5GotF+bmsOjIXJQApUaRXGFwxEo4DozG1CbUCCB+Gcl4De0x4MuogEWqy4k4vFQSPRx1SNoVUnkyk5xBRpOF4l0hlmXOVirs0v1-OFzbbD1e4BQf6A664LVCWjmvsGy6UPC1SiGiBmdAJ3V93DSm3E2TMNjAAB0VGpEGoU+BVwGW6kEFQ8VYEFqtTP1DatwfbiMA1TUHTtu4W+-d6rxNGGpmBCBhQG4RCEMQADkBIvJBCi+q4UgBvmzqhmitRuK+Zi9gKGEDH+3CbA+iibFA5ZkcgIAdp63pIBa1w4ZQH7EmA+Q4lIIBmJB6QAMw8QALPxqCoJBBFQJQuRceMtQAIwPjxABMclQAArPxAyiRUaJkmixYUmYGb-twrEiOxnFQNxwniOIKkqZpRncFGnY1uZ3G2VZ4j2aMYLtv4nbULCEBbnCBS1HRfYDH4QA)

## Extended features (planned but not in MVP)

### Color Helpers

```ts
import { Palette } from 'pelle';
import { red, green, blue, grey, white } from 'pelle/color';
import { lighten, darken, mix, complement } from 'pelle/util';

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

