import { ThemeProvider } from "@components/ThemeProvider";
import SearchContext from "@store/searchContext";
import { BrowserRouter } from "react-router-dom";

export const ProvidersWrapper = ({ children, state }) => (
  <ThemeProvider>
    <SearchContext.Provider value={state}>
      <BrowserRouter>{children}</BrowserRouter>
    </SearchContext.Provider>
  </ThemeProvider>
);
