import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
    rules: {
      // Allow natural punctuation in copy (e.g. apostrophes and quotes) to avoid
      // blocking production builds. Individual occurrences can be escaped if
      // needed for HTML entities, but the content is intentionally written
      // with natural characters.
      'react/no-unescaped-entities': 'off',
    },
  },
];

export default eslintConfig;
