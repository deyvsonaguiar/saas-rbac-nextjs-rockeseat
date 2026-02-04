/**@typedef {import("prettier").Config} PrettierConfig */

/** @type { PrettierConfig} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  tabWidth: 2,
  useTab: false,
  semi: false,
  singleQuote: true,
  quoteQuote: "as-needed", 
  jsxSingleQuote: false,
  trailingComma: "es5",
  bracketSpacing: "true",
  arrowParens: "always",
  endOfLine: "auto",
  jsxBracketSameLine: false
}