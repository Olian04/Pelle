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
    input: './src/exports/cdn.ts',
    output: {
      file: './cdn/pelle.js',
      format: 'iife',
      name: 'pelle'
    },
    plugins,
  },
]);
