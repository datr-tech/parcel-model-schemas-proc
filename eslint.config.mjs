import { includeIgnoreFile } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';
import path from 'node:path';

const gitignorePath = path.resolve('./.gitignore');
const compat = new FlatCompat({
  baseDirectory: path.resolve('./'),
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  includeIgnoreFile(gitignorePath),
  ...compat.extends(
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ),
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
      prettier,
    },
    languageOptions: {
      parser: tsParser,
    },
    rules: {
      'no-console': 1,
      'prettier/prettier': 2,
    },
  },
];
