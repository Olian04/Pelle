import { Palette, Color, Util } from '..';
const palette = Palette({
  primary: '#5865f2',
  highlight: {
    success: Color.green[200],
    error: Color.red[200],
    log: Color.blue[400],
    info: Color.grey[50],
  },
  secondary: Util.emphasize(`#5865f2`),
});
