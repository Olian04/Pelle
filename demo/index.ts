import { Palette } from 'pelle';
import { emphasize } from 'pelle/util';
import { green, red, blue, grey } from 'pelle/color';

const palette = Palette({
  primary: '#5865f2',
  secondary: emphasize(`#5865f2`),
  highlight: {
    success: green[200],
    error: red[200],
    log: blue[400],
    info: grey[50],
  },
});

console.log(palette);
