import StyledThemeProvider from '../styles/ThemeProvider';
function MyApp({ Component, pageProps }: any) {
  return (
    <StyledThemeProvider>
      <Component {...pageProps} />
    </StyledThemeProvider>
  );
}

export default MyApp;
