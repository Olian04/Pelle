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
* Initial POC: [typescript playground](https://www.typescriptlang.org/play?#code/C4TwDgpgBAogHmAhgOwCYBVwQDzoHxQC8U6UEcwEaAzlAPYBGAVhAMbABQUUA-CWRSqpaAS2QAzCACcoAeV5QA3lADaAaShioAawgg64uQF0AXLAQoMWbLPVGCAXyhnkEAG7SuzkgG4OHUEgoAEkABUQAGwhgSnQIAFswCMRKIiVVbU1kKGpgKTEAc1McvMKoAB8Q8KiYiDjE5NSHf0DoYIBhOgi6KQBlAHcU1gALNMUvbnjEMTNc-OQCv25uCJEC4eBZ0oWl5dREKW0t+cWJqEoKY8K-ZoCsKsjoylwBShoHmtiEpJSIAmJxssMlkdHoDCRiugVNojK8hLQwo9avUfqkzkC+IjPjgoTC8OjlmYOl0egMhsMbv5WHRkLkoAUqNJfp1un1BsARmkABQMRDUCAsnpXBYASiJgrZ5KIBC5gOWUxmUF5-IlABozqt1pslXyBSSpOqgftDmZlXrWYblhdtWa1RwHCK-BxqbTgFBqk9oMQXuQ3sIPp6UY0-lzKA1fmZ0GLzEg0JhINgsZ7cHh-vigbJmGxgAA6KilCDUUPfYMinNSCCoACurAgXK5FeoqoyzbcRhF0qgsoJ3BzfcblqB3GhxVa4LcREIxAA5HNCtOFAzXFJmfqyRzhly3B2zB7aluRYOoA7m4oHVA+RfkCAnS66UhsWk95Ru0CwPkplIQGZpwBiADM-4ACxAagqDTkewxrMMmobGYcpDlA74iJ+35QH+YHiOIACs2EQT2ORsDSxpoX+uGYeI+FAs0Dq3jS1BdBAObdAUXIPp6jocEAA)

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

