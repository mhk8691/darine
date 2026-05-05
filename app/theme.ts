"use client";
import { createTheme } from "@mui/material";
import rtlPlugin from "@mui/stylis-plugin-rtl";
import localFont from "next/font/local";
import { prefixer } from "stylis";

const IranYekanFont = localFont({
  src: [
    {
      path: "./fonts/Qs_Iranyekan.ttf",
      weight: "400",
    },
    {
      path: "./fonts/Qs_Iranyekan_medium.ttf",
      weight: "500",
    },
    {
      path: "./fonts/Qs_Iranyekan_bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-iranyekan",
});

declare module "@mui/material/styles" {
  interface TypeText {
    title: string;
    subtitle: string;
    muted: string;
  }
  interface TypeBackground {
    border: string;
  }

  interface PaletteOptions {
    text?: Partial<TypeText>;
    background?: Partial<TypeBackground>;
  }
}

export const rtl = {
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
};

export const getTheme = (mode: "light" | "dark" = "light") =>
  createTheme({
    typography: {
      fontFamily: `${IranYekanFont.style.fontFamily}, sans-serif`,
    },
    palette: {
      mode,

      primary: {
        light: "#FDE378",
        main: "#FCD535",
      },
      secondary: {
        main: "#6DA9E1",
      },

      background: {
        default: mode === "dark" ? "#10100F" : "#FFFFFF",
        paper: mode === "dark" ? "#292926" : "#EFEEEC",
        border: mode === "dark" ? "#494949" : "#D4D4D2",
      },

      text: {
        primary: mode === "dark" ? "#EBEBE6" : "#1C1C1A",
        secondary: mode === "dark" ? "#D9D9D3" : "#393936",
        title: mode === "dark" ? "#FAF9F6" : "#10100F",
        subtitle: mode === "dark" ? "#ADADA9" : "#757571",
        muted: mode === "dark" ? "#C2C2BA" : "#575753",
      },
    },

    direction: "rtl",

    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1100,
        xl: 1536,
      },
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableRipple: true,
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            boxShadow: "none",

            "&:hover": {
              boxShadow: "none",
              backgroundColor: "none",
            },

            "&:active": {
              boxShadow: "none",
            },
          },
        },
      },

      MuiIconButton: {
        defaultProps: {
          disableRipple: true,
        },
      },

      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
        },
      },

      MuiOutlinedInput: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: "8px",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.background.border,
              borderRadius: "8px",
              transition: "none",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.background.border,
              borderWidth: "1px",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.background.border,
              borderWidth: "1px",
            },
            "&.Mui-active .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.background.border,
              borderWidth: "1px",
            },
            "&.Mui-disabled": {
              "& .MuiOutlinedInput-input": {
                color: theme.palette.text.primary,
                WebkitTextFillColor: theme.palette.text.primary,
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.background.border,
              },
            },
          }),
        },
      },

      MuiInputBase: {
        styleOverrides: {
          root: ({ theme }) => ({
            "&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.background.border,
            },
            "&.Mui-disabled": {
              "& .MuiInputBase-input": {
                color: theme.palette.text.primary,
                WebkitTextFillColor: theme.palette.text.primary,
              },
            },
          }),
        },
      },

      MuiFilledInput: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: "8px",
            "&:before, &:after": {
              borderBottomColor: theme.palette.background.border,
            },
            "&:hover:before": {
              borderBottomColor: theme.palette.background.border,
            },
            "&.Mui-focused:after": {
              borderBottomColor: theme.palette.background.border,
              borderWidth: "1px",
            },
            "&.Mui-disabled": {
              backgroundColor:
                mode === "dark"
                  ? "rgba(41, 41, 38, 0.8)"
                  : "rgba(239, 238, 236, 0.8)",
              "&:before": {
                borderBottomColor: theme.palette.background.border,
              },
              "& .MuiFilledInput-input": {
                color: theme.palette.text.primary,
                WebkitTextFillColor: theme.palette.text.primary,
              },
            },
          }),
        },
      },

      MuiSelect: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: "8px",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.background.border,
              borderRadius: "8px",
              transition: "none",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.background.border,
              borderWidth: "1px",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.background.border,
              borderWidth: "1px",
            },
            "&.Mui-active .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.background.border,
              borderWidth: "1px",
            },
            "& .MuiSelect-icon": {
              color: theme.palette.text.primary,
            },
            "&.Mui-disabled": {
              "& .MuiSelect-select": {
                color: theme.palette.text.primary,
              },
              "& .MuiSelect-icon": {
                color: theme.palette.text.primary,
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.background.border,
              },
            },
          }),
        },
      },
    },
  });
