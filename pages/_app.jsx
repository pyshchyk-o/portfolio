import '../styles/globals.css';
import ErrorBoundary from './components/Error';

export default function App({ Component, pageProps }) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}
