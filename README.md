# color-palette

Heavily inspired by the [theme palette provided by material ui](https://material-ui.com/customization/palette/).

```ts
import { Palette } from 'color-palette';

const palette = Palette({
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
* Initial POC: [typescript playground](https://www.typescriptlang.org/play?#code/C4TwDgpgBAkgCgQwDYWMCAVCBbMSHpQC8UA3lANoDWUAlgHZQDOwATgwOYC6AXM25ygAfWIhRpMOPAWgBfAFDzQkWAGEA9knWsAygHcCAYwAWxMvKiWo2BAz4t29DgG4LVpLQ7Hg9gU9dWUAAmCKxUvo4ubpboAB4+-JGuCkrg0PDIqOgAPBhQEPEQ9EFMopkSWLj46AB8ZqTRlDQMUFQQIOoAZlAYvD3UXPmFxaUZ4uiV0oSNgQD8ZeMQuQM1M1Z8MBpaugbAJsmKhur0LFAcRRCsMlva+kamJAAUAEYITBA3rBGcAJQbn3c9g86o8GoEbHYoK93p8ADSNDxeBLQj6abTwwIhMJ8FFwxpxZFvVHbeGyH6ueRHE7AKBiLLQEi5IboEYLemTaoQGqPdBVGR8DB-NkSXJ1IirQIAeWeACsIIZgAA6IoCCBMHlSTk-RWsCBBACuhggj0euqYsKaFoAblwfsQQWDAlZFS6zRinZYBnxlBAulArcQiCQAOQOTjBqDzc70S7XNE7e6PK12vh0iRJn7uyxki2kMlQN7CnIYGoUqmnMDlQgkNPoUGNMDsGysEB8YMAYgAzJ2ACw9oJBYNZqDGTzGRHePiOj2N2jN1tQDsDzqdACsq6HjQUZLLxyYmggiq0HEelcW5PkQA)

## Extended features (planned but not in MVP)

### Color Helpers

```ts
import { Palette } from 'color-palette';
import { red, green, blue, black, white } from 'color-palette/color';
import { lighten, darken } from 'color-palette/util';

const palette = Palette({
  primary: '#5865f2',
  highlight: {
    success: green[200],
    error: red[200],
    log: blue[400],
    info: black[10],
  },
  secondary: darken`#66ffff`,
});
```

