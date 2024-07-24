import { setup } from "../utils";
import { SelectCheckbox } from "@components/SelectCheckbox";
import { MainPage } from "@pages/MainPage";
import { DetailPage } from "@pages/DetailPage";

describe("selected items", () => {
  it("clicking on select button should choose the checkbox", async () => {
    const { user, getByRole } = setup(<SelectCheckbox value="zorro" />);
    const checkbox = getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
    await user.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it("when at least 1 item has been selected, the flyout element should appear at the bottom", async () => {
    const { findAllByTestId } = setup(
      <>
        <MainPage />
        <DetailPage />
      </>
    );

    const planetsToClick = await findAllByTestId("planet");
    planetsToClick.forEach(() => {});
    // await user.click(clickedPlanet);
    // screen.debug();
  });
});
