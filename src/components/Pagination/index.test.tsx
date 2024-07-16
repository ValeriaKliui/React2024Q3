import { fireEvent, render } from "@testing-library/react";
import { Pagination } from ".";
import {
  it,
  describe,
  vi,
  beforeAll,
  beforeEach,
  afterEach,
  expect,
} from "vitest";
import { BrowserRouter } from "react-router-dom";
import { screen, configure } from "@testing-library/react";
import SearchContext from "@store/searchContext";
import { INIT_TEST_STATE } from "../../__tests__";

const initPage = 5;
const initPageUrl = `/?page=${initPage}`;

describe("Pagination", () => {
  beforeEach(() => {
    window.history.replaceState("", "", initPageUrl);
    render(
      <SearchContext.Provider value={INIT_TEST_STATE}>
        <BrowserRouter>
          <a href={initPageUrl}>on {initPage} page</a>
          <Pagination />
        </BrowserRouter>
      </SearchContext.Provider>
    );
  });

  it("should display 6 pages", () => {
    expect(screen.getByText(initPage)).toBeInTheDocument();
  });

  it("should change URL after clicking on another page", () => {
    const newPage = 3;
    fireEvent.click(screen.getByText(newPage));
    expect(window.location.href).toContain(`page=${newPage}`);
  });
});
