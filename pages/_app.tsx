
import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../theming/theme';
import createEmotionCache from '../src/createEmotionCache';
import '../theming/global.css';
import Layout from '../components/layout/Layout';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Christian website</title>
        <meta property="og:title" content="Christian's website" key="website" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
            <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
}