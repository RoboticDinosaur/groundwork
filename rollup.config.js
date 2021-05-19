import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import { terser } from 'rollup-plugin-terser';
import path from 'path';

const dev = process.env.NODE_ENV !== 'production';

export default {
  input: 'src/js/index.js',
  output: {
    sourcemap: false,
    format: 'iife',
    name: 'index',
    file: 'dist/js/index.bundle.js'
  },
  plugins: [
    replace({
      DEV_MODE: dev
    }),
    resolve(),
    commonjs(),
    !dev && terser()
  ],
  watch: {
    clearScreen: false
  }
}
