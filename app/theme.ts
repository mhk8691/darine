"use client";
import { createTheme } from "@mui/material";
import { cyan } from "@mui/material/colors";
import localFont from "next/font/local";
import { prefixer } from "stylis";
// import rtlPlugin from "stylis-plugin-rtl";

const IranYekanFont = localFont({
  src: [
    {
      path: "./fonts/Qs_Iranyekan.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Qs_Iranyekan_medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Qs_Iranyekan_bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-iranyekan",
});

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xsm: true;
  }
  interface TypeText {
    title: string;
  }

  interface PaletteOptions {
    text?: Partial<TypeText>;
  }
}
export const rtl = {
  key: "muirtl",
  stylisPlugins: [prefixer],
};
const theme = createTheme({
  typography: {
    fontFamily: `${IranYekanFont.style.fontFamily}, sans-serif`,
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#FCD535",
    },
    secondary: {
      main: cyan[500],
    },
    background: {
      default: "#10100F",
      paper: "#292926",
    },
    text: {
      primary: "#EBEBE6",
      secondary: "#D9D9D3",
      title: "#FAF9F6",
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
