import { ThemeProvider } from "@components/ThemeProvider";
import SearchContext from "@store/searchContext";
import { store } from "@store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

export const ProvidersWrapper = ({ children, state }) => (
  <Provider store={store}>
    <ThemeProvider>
      <SearchContext.Provider value={state}>
        <BrowserRouter>{children}</BrowserRouter>
      </SearchContext.Provider>
    </ThemeProvider>
  </Provider>
);
