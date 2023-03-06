import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/Link';


export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Portfolio
        </Typography>
        <h4 className="text-red-500">Hi this is Tailwind</h4>
        <h1 className='text-white'>Next.js 13 with Tailwind and MUI Boilerplate</h1>
        <Link href="/" color="secondary">
            Go to the main page
        </Link>
      </Box>
    </Container>
  );
}