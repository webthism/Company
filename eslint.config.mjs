import { FlatCompat } from "@eslint/eslintrc";

// eslint-config-next 15 ships legacy (.eslintrc) configs; FlatCompat adapts them.
const compat = new FlatCompat({ baseDirectory: import.meta.dirname });

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [".next/**", ".open-next/**", "out/**", "build/**", "next-env.d.ts"],
  },
];

export default eslintConfig;
