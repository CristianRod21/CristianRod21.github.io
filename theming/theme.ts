import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface TypeBackground {
    light?: string;
  }
}

// Create a theme instance.
const theme = createTheme({
   palette: {
     primary: {
       main: '#bc6c25',
       light: '#1c5987',
     },
     secondary: {
       main: '#393e46',
     },
     error: {
       main: red.A400,
     },
     background: {
        default: '#dbc5a9',
        light: '#fefae0',
     },
   },
  typography: {
    fontFamily: 'Söhne, sans-serif',
  },
});

export default responsiveFontSizes(theme);