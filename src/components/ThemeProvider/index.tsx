import { FC, useCallback, useMemo, useState } from "react";
import { ThemeProvider as Provider } from "styled-components";
import { ThemeEnum, ThemeProviderProps } from "./interfaces";
import { darkTheme, lightTheme } from "./theme";
import ThemeContext from "@store/themeContext";

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState(ThemeEnum.light);

  const toggleTheme = useCallback(
    () =>
      theme === ThemeEnum.light
        ? setTheme(ThemeEnum.dark)
        : setTheme(ThemeEnum.light),
    [theme],
  );

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);
  const choosenTheme = theme === ThemeEnum.light ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={value}>
      <Provider theme={choosenTheme}>{children}</Provider>
    </ThemeContext.Provider>
  );
};
