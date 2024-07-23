import { BaseTheme, ThemeEnum } from "./interfaces";

export const baseTheme: BaseTheme = {
  colors: {
    primary: "#7986cb",
    secondary: "#2b2b2b",
    success: "#4caf50",
    danger: "#f44336 ",

    bg: "#E5E4E8",
    font: "#19191B",
  },
};

export const lightTheme = {
  ...baseTheme,
  type: ThemeEnum.light,
};

export const darkTheme = {
  ...baseTheme,
  type: ThemeEnum.dark,
};
