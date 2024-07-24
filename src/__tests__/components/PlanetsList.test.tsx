import { PlanetsList } from "@components/PlanetsList";
import { INIT_TEST_STATE } from "../mocks";
import { renderWithProviders } from "../utils";

describe("planetsList", () => {
  it("should show loader if planets are loading", () => {
    const { getByTestId } = renderWithProviders(<PlanetsList />);

    expect(getByTestId("planets_loader")).toBeInTheDocument();
  });

  it("component renders the specified number of cards", async () => {
    const planets = INIT_TEST_STATE.results;
    const { findAllByTestId } = renderWithProviders(<PlanetsList />);

    expect((await findAllByTestId("planet")).length).toEqual(planets.length);
  });

  it("list renders items according to data", () => {
    const planets = INIT_TEST_STATE.results;

    const { findByText } = renderWithProviders(<PlanetsList />);

    planets.forEach(async (planet) => {
      expect(await findByText(planet.name)).toBeInTheDocument();
    });
  });
});
