import SearchContext from "@store/searchContext";
import { BrowserRouter } from "react-router-dom";

export const ProvidersWrapper = ({ children, state }) => (
  <SearchContext.Provider value={state}>
    <BrowserRouter>{children}</BrowserRouter>
  </SearchContext.Provider>
);
