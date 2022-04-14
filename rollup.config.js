import { defineConfig } from 'rollup';
import typescript from 'rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const plugins = [
  typescript(),
  resolve(),
  commonjs(),
  terser(),
];

export default defineConfig([
  {
    input: './src/exports/api.ts',
    output: {
      file: './cdn/pelle.js',
      format: 'iife',
      name: 'Pelle'
    },
    plugins,
  },
  {
    input: './src/exports/util.ts',
    output: {
      file: './cdn/util.js',
      format: 'iife',
      name: 'Util'
    },
    plugins,
  },
  {
    input: './src/exports/color.ts',
    output: {
      file: './cdn/color.js',
      format: 'iife',
      name: 'Color'
    },
    plugins,
  }
]);
