import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

export const palette = {
  blue: {
    light: "#36a2d1",
    DEFAULT: "#095ea0",
    dark: "#3a495d",
  },
  green: {
    light: "#61eeac",
    DEFAULT: "#1B9C85",
    dark: "#0c5245",
  },
  yellow: {
    light: "#f8d15d",
    DEFAULT: "#edb202",
    dark: "#d6a308",
  },
  orange: {
    light: "#ed8345",
    DEFAULT: "#E55807",
    dark: "#bb5210",
  },
  beige: {
    100: "#f4f0e5",
    200: "#dcd8ce",
    300: "#c3c0b7",
    400: "#aba8a0",
    500: "#929089",
    600: "#7a7873",
    700: "#62605c",
    800: "#494845",
    900: "#31302e",
  },
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
      black: "#181817",
      white: "#fcfbf7",

      blue: palette.blue,
      green: palette.green,
      yellow: palette.yellow,
      orange: palette.orange,
      red: "#B22727",

      beige: palette.beige,

      background: {
        DEFAULT: palette.beige[100],
        dark: palette.beige[200],
      },
      border: palette.beige[300],
      text: {
        light: palette.beige[500],
        DEFAULT: palette.beige[800],
        dark: palette.beige[900],
      },
      link: {
        DEFAULT: palette.orange["DEFAULT"],
        hover: palette.yellow["DEFAULT"],
      },
      button: {
        DEFAULT: palette.orange["DEFAULT"],
        hover: palette.yellow["DEFAULT"],
      },
    },
    extend: {
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.text.DEFAULT"),
            "--tw-prose-headings": theme("colors.text.DEFAULT"),
            "--tw-prose-lead": theme("colors.text.DEFAULT"),
            "--tw-prose-links": theme("colors.orange.DEFAULT"),
            "--tw-prose-bold": theme("colors.text.dark"),
            "--tw-prose-counters": theme("colors.text.DEFAULT"),
            "--tw-prose-bullets": theme("colors.text.light"),
            "--tw-prose-hr": theme("colors.border"),
            "--tw-prose-quotes": theme("colors.text.DEFAULT"),
            "--tw-prose-quote-borders": theme("colors.border"),
            "--tw-prose-captions": theme("colors.text.light"),
            "--tw-prose-kbd": theme("colors.text.DEFAULT"),
            "--tw-prose-code": theme("colors.text.DEFAULT"),
            "--tw-prose-pre-code": theme("colors.text.DEFAULT"),
            "--tw-prose-pre-bg": theme("colors.background.DEFAULT"),
            "--tw-prose-th-borders": theme("colors.border"),
            "--tw-prose-td-borders": theme("colors.border"),
            h2: {
              marginTop: "1.25rem",
              marginBottom: "0.625rem",
            },
            a: {
              "&:hover": {
                color: theme("colors.link['hover']"),
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
