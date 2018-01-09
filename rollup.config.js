import babel from 'rollup-plugin-babel';
import pkg from './package.json';

export default {
  input: 'lib/funf.js',
  entry: 'lib/funf.js',
  output: [
    { file: pkg.browser, format: 'umd' },
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'es' }
  ],
  plugins: [babel()]
}
