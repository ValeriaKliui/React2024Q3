import {
  fireEvent,
  render,
  waitForElementToBeRemoved,
  screen,
} from "@testing-library/react";
import { INIT_TEST_STATE } from "../../__tests__";
import SearchContext from "@store/searchContext";
import { BrowserRouter } from "react-router-dom";
import { DetailedCard } from ".";
import { Mock, vi } from "vitest";
import { getDiameter } from "@utils/getDiameter";
import { DetailPage } from "@pages/DetailPage";
import { PlanetItem } from "@components/PlanetItem";
import { PlanetsList } from "@components/PlanetsList";
import { MainPage } from "@pages/MainPage";

const planet = INIT_TEST_STATE.planetsInfo.results[0];

global.fetch = vi.fn((param) => {
  // if (param.includes(planet.name))
  //   return Promise.resolve({
  //     json: () => Promise.resolve(INIT_TEST_STATE),
  //   });
  // else return Promise.reject();
  return Promise.resolve({
    json: () => Promise.resolve(INIT_TEST_STATE.planetsInfo),
  });
}) as Mock;

describe("", () => {
  it("", () => {
    const { getByText } = render(
      <SearchContext.Provider value={INIT_TEST_STATE}>
        <BrowserRouter>
          <MainPage />
        </BrowserRouter>
      </SearchContext.Provider>
    );

    screen.debug();

    // fireEvent.click(getByText(planet.name));
  });
});

// describe("detailedCard", () => {
//   it("loading indicator is displayed while fetching data", async () => {
//     const { getByTestId } = render(
//       <SearchContext.Provider value={INIT_TEST_STATE}>
//         <BrowserRouter>
//           <PlanetsList />
//           <DetailedCard />
//         </BrowserRouter>
//       </SearchContext.Provider>
//     );

//     const loader = getByTestId("detail_loader");

//     expect(loader).toBeInTheDocument();
//     await waitForElementToBeRemoved(loader);
//     expect(getByTestId("detail_info")).toBeInTheDocument();
//   });

//   it("detailed card component correctly displays the detailed card data", async () => {
//     const { getByText, getByTestId } = render(
//       <SearchContext.Provider value={INIT_TEST_STATE}>
//         <BrowserRouter>
//           <PlanetsList />
//         </BrowserRouter>
//       </SearchContext.Provider>
//     );

//     fireEvent.click(getByTestId("planet"));
//     screen.debug();
//     // await waitForElementToBeRemoved(getByTestId("detail_loader"));
//     // expect(getByText(planet.name)).toBeInTheDocument();
//     // expect(getByText(getDiameter(planet.diameter))).toBeInTheDocument();
//   });

//   // it("clicking the close button hides the component", async () => {
//   //   const { getByTestId } = render(
//   //     <SearchContext.Provider value={INIT_TEST_STATE}>
//   //       <BrowserRouter>
//   //         <DetailPage />
//   //       </BrowserRouter>
//   //     </SearchContext.Provider>
//   //   );

//   //   await waitForElementToBeRemoved(getByTestId("loader"));
//   //   expect(getByTestId("detail_info")).toBeInTheDocument();

//   //   fireEvent.click(getByTestId("close"));
//   //   screen.debug();
//   // });
// });
