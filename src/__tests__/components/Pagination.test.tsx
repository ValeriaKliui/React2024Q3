import { findByRole, screen } from "@testing-library/react";
import { renderWithProviders, setup } from "../utils";
import { Pagination } from "@components/Pagination";
import { MainPage } from "@pages/MainPage";

const pagesAmount = 6;
const initPageUrl = `/?page=${pagesAmount}`;

describe("Pagination", () => {
  beforeEach(() => {
    window.history.replaceState("", "", initPageUrl);
  });

  it(`should display ${pagesAmount} pages`, async () => {
    const { findAllByRole } = renderWithProviders(
      <>
        <a href={initPageUrl}>on {pagesAmount} page</a>
        <MainPage />
      </>
    );
    const pages = await findAllByRole("generic", { name: /page/i });
    const lastPageIndex = pages.length - 1;
    const lastPage = pages[lastPageIndex];

    expect(pages.length).toEqual(pagesAmount);
    expect(lastPage.textContent).toEqual(String(pagesAmount));
  });

  it("should change URL after clicking on another page", async () => {
    const newPage = 2;

    const { user, findByRole } = setup(<MainPage />);

    await user.click(await findByRole("generic", { name: `${newPage} page` }));
    expect(window.location.href).toContain(`page=${newPage}`);
  });
});
