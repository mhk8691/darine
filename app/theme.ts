"use client";
import { createTheme } from "@mui/material";
import { cyan, red } from "@mui/material/colors";
import localFont from "next/font/local";
import { prefixer } from "stylis";
// import rtlPlugin from "stylis-plugin-rtl";

const SamimFont = localFont({
  src: [
    {
      path: "./fonts/Samim-FD.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Samim-Medium-FD.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Samim-Bold-FD.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-samim",
});

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xsm: true;
  }
  interface TypeBackground {
    box: string;
  }

  interface PaletteOptions {
    background?: Partial<TypeBackground>;
  }
}
export const rtl = {
  key: "muirtl",
  stylisPlugins: [prefixer],
};
const theme = createTheme({
  typography: {
    fontFamily: `${SamimFont.style.fontFamily}, sans-serif`,
  },
  palette: {
    mode: "dark",
    primary: {
      main: red[700],
    },
    secondary: {
      main: cyan[500],
    },
    background: {
      box: "#1E1E1E",
    },
  },
  direction: "rtl",
  breakpoints: {
    values: {
      xs: 0,
      xsm: 450,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
export default theme;
