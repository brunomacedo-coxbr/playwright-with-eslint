import globals from "globals";
import pluginJs from "@eslint/js";
import tsEslintPlugin from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";
import playwright from "eslint-plugin-playwright";

export default [
  {
    files: ["tests/**/*.{js,mjs,cjs,ts}"],
    languageOptions: {
      globals: globals.browser,
      parser: parser,
    },
    plugins: {
      "@typescript-eslint": tsEslintPlugin,
      "playwright": playwright,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...tsEslintPlugin.configs.recommended.rules,
      ...playwright.configs.recommended.rules,
      "quotes": ["error", "single"],
      "semi": ["error", "always"],
    },
  },
];
