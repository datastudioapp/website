/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  astroAllowShorthand: false,
  proseWrap: "always",
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
    {
      files: "*.json",
      options: {
        trailingComma: "none",
      },
    },
  ],
};
