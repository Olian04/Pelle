import { describe, it } from 'mocha';
import { expect } from 'chai';

import { generateColorSwatch } from '../../src/generateColorSwatch';
import { defaultColorSwatchTemplate } from '../../src/defaultPaletteConstructor';
import { ColorString } from '../../src/types/ColorString';
import { darken } from '../../src/util/darken';
import { lighten } from '../../src/util/lighten';
import { getContrastText } from '../../src/util/contrast';

describe('generateColorSwatch', () => {
  it('#nnn', () => {
    const colorMain = '#3DF';
    const colorLight = 'rgb(81, 226, 255)'; // lighten(colorMain)
    const colorDark = 'rgb(43, 187, 216)'; // darken(colorMain)
    const colorText = '#000'; // getContrastText(colorMain)
    const A = generateColorSwatch(defaultColorSwatchTemplate, colorMain);

    expect(A.main).to.equal(colorMain);
    expect(A.dark).to.equal(colorDark);
    expect(A.light).to.equal(colorLight);
    expect(A.text).to.equal(colorText);
  });

  it('#nnnnnn', () => {
    const colorMain = '#33DDFF';
    const colorLight = 'rgb(81, 226, 255)'; // lighten(colorMain)
    const colorDark = 'rgb(43, 187, 216)'; // darken(colorMain)
    const colorText = '#000'; // getContrastText(colorMain)
    const A = generateColorSwatch(defaultColorSwatchTemplate, colorMain);

    expect(A.main).to.equal(colorMain);
    expect(A.dark).to.equal(colorDark);
    expect(A.light).to.equal(colorLight);
    expect(A.text).to.equal(colorText);
  });

  it('rgb(r, g, b)', () => {
    const colorMain = 'rgb(51, 221, 255)';
    const colorLight = 'rgb(81, 226, 255)';
    const colorDark = 'rgb(43, 187, 216)';
    const colorText = '#000';
    const A = generateColorSwatch(defaultColorSwatchTemplate, colorMain);

    expect(A.main).to.equal(colorMain);
    expect(A.dark).to.equal(colorDark);
    expect(A.light).to.equal(colorLight);
    expect(A.text).to.equal(colorText);
  });

  it('rgba(r, g, b, a)', () => {
    const colorMain = 'rgba(51, 221, 255, 1)';
    const colorLight = 'rgba(81, 226, 255, 1)';
    const colorDark = 'rgba(43, 187, 216, 1)';
    const colorText = '#000';
    const A = generateColorSwatch(defaultColorSwatchTemplate, colorMain);

    expect(A.main).to.equal(colorMain);
    expect(A.dark).to.equal(colorDark);
    expect(A.light).to.equal(colorLight);
    expect(A.text).to.equal(colorText);
  });

  it('hsl(h, s, l)', () => {
    const colorMain = 'hsl(190, 100%, 60%)';
    const colorLight = 'hsl(190, 100%, 66%)';
    const colorDark = 'hsl(190, 100%, 51%)';
    const colorText = '#000';
    const A = generateColorSwatch(defaultColorSwatchTemplate, colorMain);

    expect(A.main).to.equal(colorMain);
    expect(A.dark).to.equal(colorDark);
    expect(A.light).to.equal(colorLight);
    expect(A.text).to.equal(colorText);
  });

  it('hsla(h, s, l, a)', () => {
    const colorMain = 'hsla(190, 100%, 60%, 1)';
    const colorLight = 'hsla(190, 100%, 66%, 1)';
    const colorDark = 'hsla(190, 100%, 51%, 1)';
    const colorText = '#fff'; // TODO: Figure out why this one ends up as white, when all other end up as black
    const A = generateColorSwatch(defaultColorSwatchTemplate, colorMain);

    expect(A.main).to.equal(colorMain);
    expect(A.dark).to.equal(colorDark);
    expect(A.light).to.equal(colorLight);
    expect(A.text).to.equal(colorText);
  });
});
