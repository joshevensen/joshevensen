import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const hexToRgb = (hex: string) => {
  hex = hex.replace("#", "");
  hex = hex.length === 3 ? hex.replace(/./g, "$&$&") : hex;
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `${r} ${g} ${b}`;
};

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/library/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      slate: colors.slate,
      black: colors.black,
      white: colors.white,
      blueDark: "#142F43",
      blue: "#166687",
      teal: "#278a97",
      tealLight: "#8ed2db",
      yellow: "#FFBF00",
      orange: "#E55807",
      beige: "#f4f0e5",
      beigeDark: "#e3ded2",
      red: "#B22727",
    },
    extend: {
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.blueDark"),
            "--tw-prose-headings": theme("colors.blueDark"),
            "--tw-prose-lead": theme("colors.slate[600]"),
            "--tw-prose-links": theme("colors.orange"),
            "--tw-prose-bold": theme("colors.slate[900]"),
            "--tw-prose-counters": theme("colors.slate[500]"),
            "--tw-prose-bullets": theme("colors.slate[300]"),
            "--tw-prose-hr": theme("colors.slate[200]"),
            "--tw-prose-quotes": theme("colors.slate[900]"),
            "--tw-prose-quote-borders": theme("colors.slate[200]"),
            "--tw-prose-captions": theme("colors.slate[500]"),
            "--tw-prose-kbd": theme("colors.slate[900]"),
            "--tw-prose-kbd-shadows": hexToRgb(theme("colors.slate[900]")),
            "--tw-prose-code": theme("colors.slate[900]"),
            "--tw-prose-pre-code": theme("colors.slate[200]"),
            "--tw-prose-pre-bg": theme("colors.slate[800]"),
            "--tw-prose-th-borders": theme("colors.slate[300]"),
            "--tw-prose-td-borders": theme("colors.slate[200]"),
            "--tw-prose-invert-body": theme("colors.slate[300]"),
            "--tw-prose-invert-headings": theme("colors.white"),
            "--tw-prose-invert-lead": theme("colors.slate[400]"),
            "--tw-prose-invert-links": theme("colors.white"),
            "--tw-prose-invert-bold": theme("colors.white"),
            "--tw-prose-invert-counters": theme("colors.slate[400]"),
            "--tw-prose-invert-bullets": theme("colors.slate[600]"),
            "--tw-prose-invert-hr": theme("colors.slate[700]"),
            "--tw-prose-invert-quotes": theme("colors.slate[100]"),
            "--tw-prose-invert-quote-borders": theme("colors.slate[700]"),
            "--tw-prose-invert-captions": theme("colors.slate[400]"),
            "--tw-prose-invert-kbd": theme("colors.white"),
            "--tw-prose-invert-kbd-shadows": hexToRgb(theme("colors.white")),
            "--tw-prose-invert-code": theme("colors.white"),
            "--tw-prose-invert-pre-code": theme("colors.slate[300]"),
            "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            "--tw-prose-invert-th-borders": theme("colors.slate[600]"),
            "--tw-prose-invert-td-borders": theme("colors.slate[700]"),
            h2: {
              marginTop: "1.25rem",
              marginBottom: "0.625rem",
            },
            a: {
              "&:hover": {
                color: theme("colors.yellow"),
              },
            },
            pre: {
              padding: 0,
              backgroundColor: "transparent",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
export default config;
