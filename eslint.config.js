import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginReactRefresh from "eslint-plugin-react-refresh";

export default [
  { languageOptions: { globals: globals.browser } },
  ...tseslint.configs.recommended,
  {
    plugins: { react: pluginReact },
    settings: { react: { version: "detect" } },
    rules: {
      ...pluginReact.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
    },
  },
  {
    plugins: { "react-hooks": pluginReactHooks },
    rules: pluginReactHooks.configs.recommended.rules,
  },
  {
    plugins: { "react-refresh": pluginReactRefresh },
    rules: {
      "react-refresh/only-export-components": "warn",
    },
  },
  {
    ignores: ["dist", "eslint.config.js"],
  },
];
