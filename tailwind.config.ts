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
    screens: {
      xs: "30em", // > 480px
      sm: "40em", // > 640px
      md: "48em", // > 768px
      lg: "64em", // > 1024px
      xl: "80em", // > 1280px
    },
    colors: {
      transparent: "transparent",
      slate: colors.slate,
      black: colors.black,
      white: colors.white,
      blue: {
        light: "#36a2d1",
        DEFAULT: "#166687",
        dark: "#142F43",
      },
      teal: {
        light: "#8ed2db",
        DEFAULT: "#278a97",
        dark: "#278a97",
      },
      yellow: {
        light: "#f8d15d",
        DEFAULT: "#FFBF00",
        dark: "#d6a308",
      },
      orange: {
        light: "#ed8345",
        DEFAULT: "#E55807",
        dark: "#bb5210",
      },
      beige: {
        DEFAULT: "#f4f0e5",
        dark: "#e3ded2",
      },
      red: "#B22727",
    },
    extend: {
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.blue[Dark]"),
            "--tw-prose-headings": theme("colors.blue[Dark]"),
            "--tw-prose-lead": theme("colors.blue[DEFAULT]"),
            "--tw-prose-links": theme("colors.orange[DEFAULT]"),
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
