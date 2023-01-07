import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme-config';

interface Props {
  children: ReactNode;
}

export const ThemeUI = (props: Props) => {
  const { children } = props;
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
