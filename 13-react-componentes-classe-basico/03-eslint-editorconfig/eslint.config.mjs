import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import babelParser from "@babel/eslint-parser";

export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {
    languageOptions: { 
      globals: globals.browser,
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ["@babel/preset-react"],
        },
      }
    }
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];