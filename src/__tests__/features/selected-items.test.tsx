import { setup } from "../utils";
import { SelectCheckbox } from "@components/SelectCheckbox";
import { MainPage } from "@pages/MainPage";
import { DetailPage } from "@pages/DetailPage";
import { screen } from "@testing-library/react";
import { INIT_TEST_STATE } from "../mocks";

describe("selected items", () => {
  it("clicking on select button should choose the checkbox", async () => {
    const { user, getByRole } = setup(<SelectCheckbox value="zorro" />);
    const checkbox = getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
    await user.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it("when at least 1 item has been selected, the flyout element should appear at the bottom", async () => {
    const planets = INIT_TEST_STATE.results;
    const { user, findByRole, getByTestId, queryByTestId, getByText } = setup(
      <>
        <MainPage />
        <DetailPage />
      </>,
    );

    expect(queryByTestId("flyout")).not.toBeInTheDocument();

    await user
      .click(
        await findByRole("generic", {
          name: `planet-${planets[0].name}`,
        }),
      )
      .then(async () => await user.click(screen.getByRole("checkbox")));

    expect(getByTestId("flyout")).toBeInTheDocument();
    expect(getByText(/1 item is selected/)).toBeInTheDocument();
  });
});
