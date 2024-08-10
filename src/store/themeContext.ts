import { createContext } from "react";
import { ThemeState } from "./interfaces";
import { ThemeEnum } from "@components/ThemeProvider/interfaces";

const initialState: ThemeState = {
  theme: ThemeEnum.light,
  toggleTheme: () => {},
};

const ThemeContext = createContext<ThemeState>(initialState);
export default ThemeContext;
