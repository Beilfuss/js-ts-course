import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import babelParser from '@babel/eslint-parser';
import airbnb from 'eslint-config-airbnb';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import babelPresetReact from '@babel/preset-react';

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: babelParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        babelOptions: {
          presets: [babelPresetReact],
        },
        requireConfigFile: false,
      },
    },
    plugins: {
      react: pluginReact,
      prettier: prettierPlugin,
      reactHooks: reactHooksPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      'react/jsx-filename-extension': 'off',
      'import/prefer-default-export': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.recommended,
  airbnb,
  prettierConfig,
];
