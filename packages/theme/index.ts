import { DefaultTheme } from 'styled-components';
import 'styled-components';

const themePrimary = {
  colors: {
    primary: "#369",
    secondary: "yellow",
    tertiary: "blue",
  }
};

export type ThemeBase = Partial<typeof themePrimary>;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeBase { }
}

export const defaultTheme: DefaultTheme & ThemeBase = {
  ...themePrimary
}

export default defaultTheme;
