import { ThemeProvider as Provider } from 'styled-components';

import GlobalStyle from './GlobalStyles';
import defaultTheme from './theme';

const StyledThemeProvider = ({ children }: any) => (
  <Provider theme={defaultTheme}>
    <>
      <GlobalStyle />
      {children}
    </>
  </Provider>
);

export default StyledThemeProvider;
