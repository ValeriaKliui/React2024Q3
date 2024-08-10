import { BaseTheme, ConcreteTheme, ThemeEnum } from "./interfaces";

export const baseTheme: BaseTheme = {
  colors: {
    primary: "rgba(0, 123, 255, 0.4);",
    primary_bright: "rgb(0, 123, 255)",
    secondary: "rgba(214, 24, 100, 0.8)",
    light: "rgb(255, 255, 255)",
    font: "rgb(0, 0, 0)",
    bg: "rgb(255, 255, 255)",
  },
};

export const lightTheme: ConcreteTheme = {
  ...baseTheme,
  type: ThemeEnum.light,
};

export const darkTheme: ConcreteTheme = {
  ...baseTheme,
  type: ThemeEnum.dark,
  colors: {
    ...baseTheme.colors,
    bg: "rgba(0, 0, 0, 0.9)",
    font: "rgb(255, 255, 255)",
  },
};
