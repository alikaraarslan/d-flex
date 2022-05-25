import { useEffect, useState } from 'react';
import Loader from '../components/Loader';
import StyledThemeProvider from '../styles/ThemeProvider';
function MyApp({ Component, pageProps }: any) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <StyledThemeProvider>
      <Component {...pageProps} />
      {loading && <Loader />}
    </StyledThemeProvider>
  );
}

export default MyApp;
