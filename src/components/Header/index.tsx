import { SearchForm } from "@components/SearchForm";
import { HeaderStyled } from "./styled";
import { Button } from "@components/Button";
import { useContext } from "react";
import ThemeContext from "@store/themeContext";
import { ThemeEnum } from "@components/ThemeProvider/interfaces";

export const Header = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  const oppositeTheme =
    theme === ThemeEnum.dark ? ThemeEnum.light : ThemeEnum.dark;
  const themeName =
    oppositeTheme.charAt(0).toUpperCase() + oppositeTheme.slice(1);

  return (
    <HeaderStyled>
      <SearchForm /> <Button onClick={toggleTheme}>{themeName} theme</Button>
    </HeaderStyled>
  );
};
