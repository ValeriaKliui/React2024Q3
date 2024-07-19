import { act, waitForElementToBeRemoved } from "@testing-library/react";
import { INIT_TEST_STATE } from "../../__tests__/mocks";
import { DetailedCard } from ".";
import { vi } from "vitest";
import { render } from "../../__tests__/utils";
import { MainPage } from "@pages/MainPage";
import { DetailPage } from "@pages/DetailPage";

// const planet = INIT_TEST_STATE.planetsInfo.results[0];

export const fetchResponseOk = (body) => ({
  ok: true,
  json: () => Promise.resolve(body),
});

// global.fetch = vi.fn(() => {
//   return Promise.resolve({
//     json: () => Promise.resolve(INIT_TEST_STATE),
//   });
// }) as Mock;

describe("detailedCard", () => {
  beforeEach(() => {
    vi.spyOn(global, "fetch").mockResolvedValue(
      fetchResponseOk(INIT_TEST_STATE)
    );
  });

  it("loading indicator is displayed while fetching data", async () => {
    const { getByTestId } = render(<DetailedCard />);

    await waitForElementToBeRemoved(() => getByTestId("detail_loader"));

    // screen.debug();
    // const { getByTestId } = render(<DetailedCard />);
    // await wait(() => expect(getByTestId("detail_loader")).toBeInTheDocument());
    // fireEvent.click(getByText(planet.name));
  });

  it("detailed card component correctly displays the detailed card data", async () => {
    await act(() => {
      render(
        <>
          <MainPage />
          <DetailPage />
        </>
      );
    });
    // screen.debug();

    // const { getByText, getByTestId } = render(
    //   <>
    //     <MainPage />
    //     <DetailPage />
    //   </>
    // );
    //
    // screen.debug();
    // fireEvent.click(getByTestId("planet"));
    //
    // //
    // // expect(getByText(planet.name)).toBeInTheDocument();
    // // expect(getByText(getDiameter(planet.diameter))).toBeInTheDocument();
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
