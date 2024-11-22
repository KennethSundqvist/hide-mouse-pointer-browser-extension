import pluginJs from "@eslint/js";
import pluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import globals from "globals";

export default [
  pluginJs.configs.recommended,
  /*
   * Node.js
   */
  {
    files: ["*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {...globals.node},
    },
  },
  /*
   * Browser
   */
  {
    files: ["src/**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {...globals.browser},
    },
  },
  // Include Prettier after all other rules so that it can override them.
  pluginPrettierRecommended,
];
