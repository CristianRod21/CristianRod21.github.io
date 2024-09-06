import * as React from 'react';
import Box from '@mui/material/Box';
import Landing from '@/components/sections/Landing';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';
import theme from '../theming/theme';

export default function Home() {
  return (
    <Box sx={{ backgroundColor: theme.palette.background.secondary}}>
      <Landing />
      <About />
      <Projects />
      <Contact />
    </Box>
  );
}
