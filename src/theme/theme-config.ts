// import PoppinsTtf from '../fonts/poppins/Poppins-Regular.ttf';
import { css } from 'styled-components';
import { PropsTheme } from '~/types/theme';

export const theme: PropsTheme = {
  name: 'default',
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    width: {
      desktop: '1120px',
      tablet: '740px',
      mobile: '360px'
    },
    values: {
      xs: 512,
      sm: 768,
      md: 1024,
      lg: 1280,
      xl: 1536
    }
  },
  palette: {
    mode: 'light',
    common: {
      black: '#000',
      white: '#fff'
    },
    primary: {
      main: '#0033CC',
      light: '#3DA8F5',
      dark: '#002699',
      text: '#fff'
    },
    secondary: {
      main: '#0FAC0F'
    },
    error: {
      main: '#C20A0A',
      light: '#F76D6D',
      dark: '#AA0909',
      text: '#FEE7E7'
    },
    warning: {
      main: '#FEF6E7'
    },
    info: {
      main: '#E5ECFF'
    },
    success: {
      main: '#08916F'
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#666666',
      800: '#495057',
      900: '#333333',
      1000: '#111'
    },
    text: {
      primary: 'rgba(0,0,0,.87)',
      secondary: 'rgba(0,0,0,.6)',
      disabled: 'rgba(0,0,0,.38)'
    },
    background: {
      default: '#fff',
      divider: 'rgba(0,0,0,.1)',
      rgba: 'rgba(255,255,255,.7)'
    }
  },
  shape: {
    radius: 4
  },
  space: 8,
  shadows: [
    'none',
    '0 4px 8px rgba(0, 0, 0, 0.1)',
    '0 -4px 8px 0 rgba(0, 0, 0, 0.08)',
    '0 0 6px 0px rgba(0, 0, 0, .4)',
    '0 6px 8px rgba(0, 0, 0, 0.2)'
  ],
  zindex: {
    screen: 1000,
    appBar: 1100,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
    menu: 2000
  },
  animation: {
    transition: [
      'transition: all 0.2s ease-in-out',
      'transition: all 0.4s ease-in-out'
    ],
    hover: [
      css`
        background-color: ${({ theme }) => theme.palette.opacity.light};
      `,
      css`
        background-color: rgba(0, 0, 0, 0.2);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        transform: translateY(-4px);
      `,
      css`
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        transform: translateY(-4px);
      `,
      css`
        background-color: rgba(0, 0, 0, 0.1);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        transform: translateY(-4px);
      `
    ],
    active: [
      'transform: scale(0.94); transition: unset;',
      'transform: scale(0.99); transition: unset;'
    ]
  }
};

export default theme;
