import { describe, it } from 'mocha';
import { assert } from 'chai';

import { Palette } from '../../src/api';

describe('Default Pallete', () => {
  it('Only one key', () => {
    const palette1 = Palette({
      primary: '#3344dd',
      test: 'rgb(1, 321, 54)',
      highlight: {
        primary: '#ddff55',
        secondary: '#55ddff',
      },
    });

    // TODO: Write integration tests for default palette constructor
  });
});
