import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
   palette: {
     primary: {
       main: '#bc6c25',
       alt: '#1c5987',
     },
     secondary: {
       main: '#393e46',
     },
     error: {
       main: red.A400,
     },
     background: {
        default: '#dbc5a9',
        secondary: '#fefae0',
     },
   },
  typography: {
    fontFamily: 'Söhne, sans-serif',
  },
});

export default responsiveFontSizes(theme);