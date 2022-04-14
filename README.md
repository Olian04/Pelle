[![NPM Version](https://img.shields.io/npm/v/pelle.svg?logo=npm)](https://www.npmjs.com/package/pelle)
[![Size](https://img.shields.io/bundlephobia/minzip/pelle)](https://bundlephobia.com/result?p=pelle)
![Available types](https://img.shields.io/npm/types/pelle.svg)
[![License](https://img.shields.io/npm/l/pelle.svg)](LICENSE)

# Pelle

Heavily inspired by the [theme palette provided by material ui](https://material-ui.com/customization/palette/).

## Installation

__NPM:__

[`npm install pelle`](https://www.npmjs.com/package/pelle)

```ts
import { Palette } from 'pelle';
import * as Color from 'pelle/color';
import * as Util from 'pelle/util';
```

__CDN:__

```html
<script src="https://cdn.jsdelivr.net/npm/pelle/cdn/pelle.js"></script>
<script>
  const { Palette, Util, Color } = pelle;
</script>
```

## Usage

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

## Color Helpers

```ts
import { Palette } from 'pelle';
import { green, red, blue, grey } from 'pelle/color';

const palette = Palette({
  primary: '#5865f2',
  highlight: {
    success: green[200],
    error: red[200],
    log: blue[400],
    info: grey[10],
  },
});
```

## Util Functions

```ts
import { Palette } from 'pelle';
import { darken, lighten, emphasize } from 'pelle/util';

const palette = Palette({
  primary: '#5865f2',
  secondary: darken(`#66ffff`),
  tertiary: darken(`#ff4`),
  extra: emphasize(`#55ddff`),
});
```

### WIP

__Dev resources:__

* Maybe reimplement meterial ui palette logic using [color.js](https://colorjs.io/) _(currently no typescript support)_
* Test tool for different auto palettes: <https://www.sessions.edu/color-calculator/>
* Procedural color generation: <https://sighack.com/post/procedural-color-algorithms-color-variations>
