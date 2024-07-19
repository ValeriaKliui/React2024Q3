import { Pagination } from ".";
import { screen } from "@testing-library/react";
import { render, setup } from "../../__tests__/utils";

const pagesAmount = 6;
const initPageUrl = `/?page=${pagesAmount}`;

describe("Pagination", () => {
  beforeEach(() => {
    window.history.replaceState("", "", initPageUrl);
  });

  it(`should display ${pagesAmount} pages`, () => {
    const { getAllByRole } = render(
      <>
        <a href={initPageUrl}>on {pagesAmount} page</a>
        <Pagination />
      </>,
    );
    const pages = getAllByRole("generic", { name: /page/i });
    const lastPageIndex = pages.length - 1;
    const lastPage = pages[lastPageIndex];

    expect(pages.length).toEqual(pagesAmount);
    expect(lastPage.textContent).toEqual(String(pagesAmount));
  });

  it("should change URL after clicking on another page", async () => {
    const newPage = 2;

    const { user } = setup(
      <>
        <Pagination />
      </>,
    );

    await user.click(screen.getByRole("generic", { name: `${newPage} page` }));
    expect(window.location.href).toContain(`page=${newPage}`);
  });
});
