import Script from 'next/script';

import '../styles/globals.css';
import ErrorBoundary from './components/Error';
import { ThemeProvider } from '../context/themeContext';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://kit.fontawesome.com/ca06509465.js"
        strategy="lazyOnload"
        crossOrigin="anonymous"
      />
      <ErrorBoundary>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </ErrorBoundary>
    </>
  );
}
