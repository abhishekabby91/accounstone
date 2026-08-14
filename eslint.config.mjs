import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    ignores: ['.next/**', 'node_modules/**', 'public/**', 'next-env.d.ts'],
  },
  {
    rules: {
      // Cosmetic-only: flags plain '/" inside JSX text (e.g. "your team's books").
      // Doesn't affect rendering, accessibility, or crawlability. Disabled rather
      // than mechanically escaping ~75 occurrences across ~20 content files, which
      // would risk mangling copy for no functional benefit.
      'react/no-unescaped-entities': 'off',
    },
  },
];

export default eslintConfig;
