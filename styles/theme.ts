import { lighten } from 'polished';

const defaultColor = '#242423';

//helper #333533 #242423 #f5cb5c #e8eddf #cfdbd5

const theme = {
  breakpoints: ['700px'],
  colors: {
    bg: defaultColor,
    primary: lighten(0.03, defaultColor),
    secondary: lighten(0.1, defaultColor),
    textPrimary: lighten(0.7, defaultColor),
    textSecondary: lighten(0.4, defaultColor),
  },
  fontFamily: {
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans,Ubuntu, Cantarell, "Helvetica Neue", sans-serif;',
  },
  fontSizes: ['10px', '12px', '14px', '16px', '18px', '26px', '42px'],
  space: ['0', '4px', '8px', '16px', '32px', '64px', '128px'],
  radii: {
    small: '4px',
    normal: '8px',
  },
};

export default theme;
