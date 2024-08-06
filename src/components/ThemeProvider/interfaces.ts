import { ThemeProvider } from "styled-components";

export enum ThemeEnum {
  light = "light",
  dark = "dark",
}
export type ThemeProviderProps = Omit<
  Parameters<typeof ThemeProvider>[0],
  "theme"
>;

export interface BaseTheme {
  colors: {
    primary: string;
    primary_bright: string;
    secondary: string;
    light: string;

    bg: string;
    font: string;
  };
}

export type ConcreteTheme = BaseTheme & {
  type: ThemeEnum;
};
