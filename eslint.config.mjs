import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Extends dari legacy style
  ...compat.extends("next/core-web-vitals", "next", "plugin:prettier/recommended"),
  {
    // Custom rules
    rules: {
      "@next/next/no-img-element": "off",
      "react/react-in-jsx-scope": "off",
      "prettier/prettier": "warn",
    },
  },
];

export default eslintConfig;
