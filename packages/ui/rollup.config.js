import { defineConfig } from 'rollup';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import { babel } from '@rollup/plugin-babel';
import { name } from './package.json';

export default defineConfig([
  {
    input: 'react/index.tsx',
    external: ['react', 'react-dom'],
    plugins: [
      commonjs(),
      typescript(),
      babel({
        babelrc: false,
        exclude: '**/node_modules/**',
        presets: ['@babel/preset-react', '@babel/preset-env'],
        plugins: [
          '@babel/plugin-proposal-object-rest-spread',
          '@babel/plugin-syntax-object-rest-spread',
          '@babel/plugin-transform-react-jsx',
          [
            '@babel/plugin-transform-runtime',
            {
              absoluteRuntime: false,
              corejs: false,
              helpers: false,
              regenerator: false,
              useESModules: false,
            },
          ],
        ],
      })
    ],
    output: [
      {
        name,
        file: './dist/react/index.js',
        format: 'umd',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      },
      {
        name,
        file: './es/react/index.js',
        format: 'es',
      },
      {
        name,
        file: './lib/react/index.js',
        format: 'commonjs',
      }
    ]
  }
])
