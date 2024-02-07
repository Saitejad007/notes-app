import {palette} from './palette';

const theme = {
  color: {
    bg: palette.white,
    surface: palette.white,
    primary: palette.green,
    secondary: palette.black,
    text: {
      primary: palette.black,
      secondary: palette.white,
    },
  },
  font: {
    primary: palette.charcoal,
    fontSize: {
      base: 16,
      sm: 14,
      xs: 12,
      large: 18,
      xl: 20,
    },
    fontWeight: {
      base: 400,
      bold: 700,
      light: 300,
      medium: 500,
      semiBold: 600,
      xBold: 800,
      xLight: 200,
    },
  },
  border: {
    primary: palette.grey,
    radius: {
      base: 6,
      sm: 4,
      md: 8,
      lg: 12,
      xl: 16,
      rounded: '50%',
    },
  },
  spacing: {
    base: 8,
    sm: 4,
    md: 12,
    lg: 16,
    xl: 24,
    xxl: 32,
    xs: 2,
  },
};

export const useTheme = () => theme;
