import Head from 'next/head';

import '../styles/globals.css';
import ErrorBoundary from './components/Error';
import { ThemeProvider } from '../context/themeContext';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          src="https://kit.fontawesome.com/ca06509465.js"
          crossorigin="anonymous"
        ></script>
      </Head>
      <ErrorBoundary>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </ErrorBoundary>
    </>
  );
}
