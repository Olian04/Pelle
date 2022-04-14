import { describe, it } from 'mocha';

import { Palette } from '../../src/exports/api';

const AssertType = <Origin, Target extends Origin>() => true;

describe('Default Pallete', () => {
  it('Only one key', () => {
    const p = Palette({
      primary: '#3344dd',
      highlight: {
        primary: 'hsla(50, 100%, 80%, 1)',
        secondary: 'rgb(1, 321, 54)',
      },
    });

    AssertType<string, typeof p.primary.main>();
    AssertType<string, typeof p.primary.dark>();
    AssertType<string, typeof p.primary.light>();
    AssertType<string, typeof p.primary.text>();

    AssertType<string, typeof p.highlight.primary.main>();
    AssertType<string, typeof p.highlight.primary.dark>();
    AssertType<string, typeof p.highlight.primary.light>();
    AssertType<string, typeof p.highlight.primary.text>();

    AssertType<string, typeof p.highlight.secondary.main>();
    AssertType<string, typeof p.highlight.secondary.dark>();
    AssertType<string, typeof p.highlight.secondary.light>();
    AssertType<string, typeof p.highlight.secondary.text>();
  });
});
