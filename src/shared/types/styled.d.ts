import 'styled-components/native';
import theme from '../styles/theme.dark';

declare module 'styled-components' {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType {}
}
