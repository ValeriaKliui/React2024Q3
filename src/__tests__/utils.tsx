import { PropsWithChildren, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AppStore, RootState, setupStore } from "@store/store";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: Partial<RootState>;
  store?: AppStore;
}

const renderWithProviders = (
  ui: ReactElement,
  extendedRenderOptions: ExtendedRenderOptions = {},
) => {
  const {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  } = extendedRenderOptions;

  const Wrapper = ({ children }: PropsWithChildren) => (
    <>{children}</>
    // <Provider store={store}>
    //   <ThemeProvider>
    //     <BrowserRouter>{children}</BrowserRouter>
    //   </ThemeProvider>
    // </Provider>
  );

  return {
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
};
const setup = (ui: ReactElement) => ({
  user: userEvent.setup(),
  ...renderWithProviders(ui),
});

export { renderWithProviders, setup };
