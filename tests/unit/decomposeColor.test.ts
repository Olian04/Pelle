import { describe, it } from 'mocha';
import { expect } from 'chai';

import { decomposeColor } from '../../src/util/decomposeColor';

describe('decomposeColor', () => {
  it('#nnn', () => {
    const colorMain = '#3DF';

    const color =  decomposeColor(colorMain);

    expect(color.type).to.equal('rgb');
    expect(color.values).to.deep.equal([51, 221, 255]);
  });

  it('#nnnnnn', () => {
    const colorMain = '#33DDFF';

    const color =  decomposeColor(colorMain);

    expect(color.type).to.equal('rgb');
    expect(color.values).to.deep.equal([51, 221, 255]);
  });

  it('rgb(r, g, b)', () => {
    const colorMain = 'rgb(51, 221, 255)';

    const color =  decomposeColor(colorMain);

    expect(color.type).to.equal('rgb');
    expect(color.values).to.deep.equal([51 , 221, 255]);
  });

  it('rgba(r, g, b, a)', () => {
    const colorMain = 'rgba(51, 221, 255, 1)';

    const color =  decomposeColor(colorMain);

    expect(color.type).to.equal('rgba');
    expect(color.values).to.deep.equal([51, 221, 255, 1]);
  });

  it('hsl(h, s, l)', () => {
    const colorMain = 'hsl(190, 100%, 60%)';

    const color =  decomposeColor(colorMain);

    expect(color.type).to.equal('hsl');
    expect(color.values).to.deep.equal([190, 100, 60]);
  });

  it('hsla(h, s, l, a)', () => {
    const colorMain = 'hsla(190, 100%, 60%, 1)';

    const color =  decomposeColor(colorMain);

    expect(color.type).to.equal('hsla');
    expect(color.values).to.deep.equal([190, 100, 60, 1]);
  });
});
