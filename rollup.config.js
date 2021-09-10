import ts from '@rollup/plugin-typescript'

export default {
  input: 'src/index.ts',
  output: [
    {
      format: 'cjs',
      file: 'dist/index.cjs'
    }
  ],
  plugins: [ts({ tsconfig: './tsconfig.json' })],
  external: ['crypto', '@tinyhttp/cookie', '@tinyhttp/cookie-signature']
}
