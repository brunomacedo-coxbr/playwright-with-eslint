import globals from "globals";
import pluginJs from "@eslint/js";
import tsEslintPlugin from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";
import playwright from "eslint-plugin-playwright";
import importPlugin from "eslint-plugin-import";

import style from "eslint-config-airbnb-base/rules/style";
import bestPractices from "eslint-config-airbnb-base/rules/best-practices";
import variables from "eslint-config-airbnb-base/rules/variables";

export default [
  {
    files: ["tests/**/*.{js,ts}"],
    languageOptions: {
      globals: globals.browser,
      parser: parser,
    },
    plugins: {
      "@typescript-eslint": tsEslintPlugin,
      "playwright": playwright,
      "import": importPlugin,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...tsEslintPlugin.configs.recommended.rules,
      ...playwright.configs.recommended.rules,
      ...style.rules,
      ...bestPractices.rules,
      ...variables.rules,
    },
  },
];
