import nestjsTyped from "@darraghor/eslint-plugin-nestjs-typed";
import globals from "globals";
import tseslint from "typescript-eslint";
import base from "./base.js";

export default tseslint.config(
  ...base,
  nestjsTyped.configs.flatRecommended,
  {
    files: ["**/*.ts"],
    languageOptions: {
      globals: globals.node,
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
      },
    },
  }
);
