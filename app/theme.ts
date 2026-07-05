'use client';
import { createTheme } from '@mui/material';
import rtlPlugin from '@mui/stylis-plugin-rtl';
import localFont from 'next/font/local';
import { prefixer } from 'stylis';

export const IranYekanFont = localFont({
  src: [
    {
      path: './fonts/IRANYekanRegularFaNum.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/IRANYekanMediumFaNum.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/IRANYekanExtraBoldFaNum.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-iranyekan',
});


declare module '@mui/material/styles' {
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
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
};

export const getTheme = (mode: 'light' | 'dark' = 'light') =>
  createTheme({
    typography: {
      fontFamily: `${IranYekanFont.style.fontFamily}, sans-serif`,
    },
    palette: {
      mode,

      primary: {
        light: '#FDE378',
        main: '#FCD535',
      },
      secondary: {
        main: '#6DA9E1',
      },

      background: {
        default: mode === 'dark' ? '#10100F' : '#FFFFFF',
        paper: mode === 'dark' ? '#292926' : '#EFEEEC',
        border: mode === 'dark' ? '#494949' : '#D4D4D2',
      },

      text: {
        primary: mode === 'dark' ? '#EBEBE6' : '#1C1C1A',
        secondary: mode === 'dark' ? '#D9D9D3' : '#393936',
        title: mode === 'dark' ? '#FAF9F6' : '#10100F',
        subtitle: mode === 'dark' ? '#ADADA9' : '#757571',
        muted: mode === 'dark' ? '#C2C2BA' : '#575753',
      },
    },

    direction: 'rtl',

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
   MuiCssBaseline: {
  styleOverrides: {
    '*': {
      scrollbarWidth: 'thin',
      scrollbarColor:
        mode === 'dark'
          ? '#4D4D4C #212120'
          : '#CCCCCC #F1F1F1',

      '&::-webkit-scrollbar': {
        width: '7px',
        height: '7px',
      },

      '&::-webkit-scrollbar-track': {
        background: mode === 'dark' ? '#212120' : '#F1F1F1',
        borderRadius: '10px',
      },

      '&::-webkit-scrollbar-thumb': {
        background: mode === 'dark' ? '#4D4D4C' : '#CCCCCC',
        borderRadius: '10px',
      },

      '&::-webkit-scrollbar-thumb:hover': {
        background: mode === 'dark' ? '#666' : '#aaa',
      },
    },
  },
},
      MuiOutlinedInput: {
        styleOverrides: {
          root: () => ({
            borderRadius: '8px',
            '& .MuiOutlinedInput-notchedOutline': {
              borderRadius: '8px',
            },
          
       
          }),
        },
      },


      MuiFilledInput: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: '8px',
          
            '&.Mui-disabled': {
              backgroundColor:
                mode === 'dark' ? 'rgba(41, 41, 38, 0.8)' : 'rgba(239, 238, 236, 0.8)',
             
              '& .MuiFilledInput-input': {
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
            borderRadius: '8px',
            '& .MuiOutlinedInput-notchedOutline': {
              borderRadius: '8px',
            },
          
          
            '& .MuiSelect-icon': {
              color: theme.palette.text.primary,
            },
            '&.Mui-disabled': {
              '& .MuiSelect-select': {
                color: theme.palette.text.primary,
              },
              '& .MuiSelect-icon': {
                color: theme.palette.text.primary,
              },
        
            },
          }),
        },
      },
    },
  });
