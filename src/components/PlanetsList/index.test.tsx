import SearchContext from "@store/searchContext";
import { render, screen } from "@testing-library/react";
import { describe, it, vi, Mock } from "vitest";
import { INIT_TEST_STATE } from "../../__tests__";
import { BrowserRouter } from "react-router-dom";
import { PlanetsList } from ".";

describe("planetsList", () => {
  it("appropriate message is displayed if no cards are present", () => {
    global.fetch = vi.fn(() => {
      return Promise.resolve({
        json: () => Promise.reject(INIT_TEST_STATE.planetsInfo),
      });
    }) as Mock;

    render(
      <SearchContext.Provider value={INIT_TEST_STATE}>
        <BrowserRouter>
          <PlanetsList />
        </BrowserRouter>
      </SearchContext.Provider>
    );

    screen.debug();
  });
  it("component renders the specified number of cards", () => {});
});
