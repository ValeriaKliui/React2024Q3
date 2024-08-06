import { StrictMode } from "react";
import { Provider } from "react-redux";
import { store } from "@store/store";
import { ThemeProvider } from "@components/ThemeProvider";
import { GlobalStyles } from "../globalStyles";

export default function Providers({ children }) {
  return (
    <StrictMode>
      <ThemeProvider>
        <GlobalStyles />
        <Provider store={store}>{children}</Provider>
      </ThemeProvider>
    </StrictMode>
  );
}
