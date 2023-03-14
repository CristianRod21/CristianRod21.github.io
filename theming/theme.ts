import { Roboto } from 'next/font/google';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
const theme = createTheme({
   palette: {
     primary: {
       main: '#00adb5',
     },
     secondary: {
       main: '#393e46',
     },
     error: {
       main: red.A400,
     },
     background: {
        default: '#EEEEE',
     },
   },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});



export default responsiveFontSizes(theme);