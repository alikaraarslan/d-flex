import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle(({ theme }) => ({
  '*': {
    margin: 0,
    padding: 0,
    outline: 0,
    boxSizing: 'border-box',
  },
  body: {
    fontFamily: theme.fontFamily.body,
    color: theme.colors.textPrimary,
    height: '100%',
  },
  button: {
    border: 'none',
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
}));

export default GlobalStyle;
