import 'styled-components';
import { PropsTheme } from '~/types/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends PropsTheme {}
}
