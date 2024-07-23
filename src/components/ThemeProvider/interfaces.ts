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
    secondary: string;
    success: string;
    danger: string;

    bg: string;
    font: string;
  };
}
