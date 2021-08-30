# color-palette

Heavily inspired by the [theme palette provided by material ui](https://material-ui.com/customization/palette/).

```ts
import { Palette } from 'color-palette';

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
* Initial POC: [typescript playground](https://www.typescriptlang.org/play?#code/C4TwDgpgBAogHmAhgOwCYBVwQDzoHxQC8U6UEcwEaAzlAPYBGAVhAMbABQUUA-CWRSqpaAS2QAzCACcoAeV5QA3lADaAaShioAawgg64uQF0AXLAQoMWbLPVGCAXyhnkEAG7SuzkgG4OHUEgSCABbMAAbREoANURwgFdoQi9uAAMAYgASRWpgKTEAcwdUqAAfFKhUqQKGAAps5HiQhmkHABoGppapds7m1oBKEvLuNOqGRHrFRv6ejumu1vmZ7t6F2YchvwCsKABJAAU4iGBKdFCIqKSlVW1NZChc-OQC02CwyJi4xLL9o-CTmcLp9oA5-IFoHsAMJ0cJ0KQAZQA7lFWAALIhKCohRBiMxPQp+UZQcIiApo4D4vKEiqoRBSbRU54FImjSgUJk0sE7IKHY6nHCkciUGh-flAj5XAjERQVFR3LS6fSGdBvdDyowCEXCMUAgXnSWUKAVYl8Pl6yi4DV4E2jMzQ2Hw5GotF+bmsOjIXJQApUaRXGFwxEo4DozG1CbUCCB+Gcl4De0x4MuogEWqy4k4vFQSPRx1SNoVUnkyk5xBRpOF4l0hlmXOVirs0v1-OFzbbD1e4BQf6A664LVCWjmvsGy6UPC1SiGiBmdAJ8xINCYSDYEcC3B4aU24myZhsYAAOio1Ig1CnwKuA0PUggqHirAgtVqt+obVu77cRgGqag6dt3CHkBr5VsSowamYEIGFAbhEIQxAAOQEi8CEKL6rhSAG+bOqGaK1G4P5mL2Ar4QMoHcJs76KJsUDlrRyAgB2nrekgFrXMRlD-sSYD5DiUggGYCHpAAzMJAAsYmoKgCHkVAlC5IJ4y1AAjO+wkAEyqVAACsYkDDJFRomSaLFhSZgZmB3A8SIfECVAQlSeI4jadpBmWdwUadjWdlCS5jniG5oxgu2-idtQsIQIecIFLUrF9gMfhAA)
  * Alternative POC (less expanded type): [typescript playground](https://www.typescriptlang.org/play?ssl=38&ssc=20&pln=39&pc=1#code/C4TwDgpgBAKhC2YA2BDYEBqKkFdoF4AoKEqAAwGIASAbwGdgAnASwDsBzAXzKgB9jSZRuwBGAClqsc8EREacANJOmz5SmlJlzOASh79S5YSJQSNK7es2rFyrWrs29AbkKFQkKAEkACtgjA6HCIqOhQ+FA0UADaANZQbFAMLBwAugBcsAjIaJjYeHzefkgBQdmh0JxuHtAAwgD2SPWMAMoA7mgAxgAWADwAQih0EA1NjAB84ZECJPAobJmDw6PNroZIzOzdwJnJbOxrpAAmKIyxu0z7hyToAB47SZccrlXu4HU4DPXwAKK3YChWEcYO9ejBJhEYFAIPcIEC6FAVq0OsAer1ASBJgIAPyIxrNdpdPowaIAcjmbFJqXGAkyUJh6HhUHqIgAVhBOsAZlBcfTYUy2AAzORQADyPMiMQA0glWFBYhAQPVBWKMojPsBvn8AUCQZBeqLolLqVBOFBMqwIAA3OTcumuN6eXz+QIQMHQ-lHBHOkqu4I5dAQ9VfX7-QHA0E0blxWXyxXK2BqkmxVIexleoousohXJQbmGXE+0pu5PU-OkTJIwmo4lxakvGmETr1VgMKDsOFyXJVlE9KbuhlwjN7DjjMQmZb4xh0nSVqfVtHg8KTMRRwwU1iZCcjKcKbkbLYPbdIveGE5nLdDHdjU+kO5Hq8nwi6B3N1vAKDFYv9vnp71fv1ylyMd0BzdAZ0yItXTBCEaUMUU2Q5YAADo4UuCA6DEUCAwgHRkMYCAjhwToIDEMQCLoBQYliKirVSHRlygVdyxIZC2Io29DBIOtMhqBMrXCfAIlJEd2FJCUO0tRhu3nXtujEK0GMyAD0AUnRONNdTIl0KAhl01gQFfFs2wBX0wgiFTSLXUgwBYOZGBATJSQoABmFyABZ3KOI5SQ09AGCc4wxAARiolyACZQqgABWdydF87luk2boD22TJrK4qBbOYezHKgZzvMFQVouihLMpIYY33PPLnJKwrBTK0gqhfNw3zoRoIGQpp2DEUzix0VwgA)

## Extended features (planned but not in MVP)

### Color Helpers

```ts
import { 
  Palette,
  red, green, blue, grey, white,
  lighten, darken, mix, complement,
} from 'color-palette';

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

