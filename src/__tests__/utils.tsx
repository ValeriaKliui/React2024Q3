import { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { INIT_TEST_STATE } from "./mocks";
import { ProvidersWrapper } from "./ProvidersWrapper";
import { initialState } from "@store/searchContext";

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => {
  const withoutState = options?.state === false;
  const state = withoutState ? initialState : INIT_TEST_STATE;

  return render(ui, {
    wrapper: ({ children }) => (
      <ProvidersWrapper state={state}>{children}</ProvidersWrapper>
    ),
    ...options,
  });
};
const setup = (ui: ReactElement) => ({
  user: userEvent.setup(),
  ...customRender(ui),
});

export { customRender as render, setup };
