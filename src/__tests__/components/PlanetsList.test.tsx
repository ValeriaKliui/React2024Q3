import { PlanetsList } from "@components/PlanetsList";
import { INIT_TEST_STATE } from "../mocks";
import { render } from "../utils";
import { screen } from "@testing-library/react";

describe("planetsList", () => {
  it("appropriate message is displayed if no cards are present", () => {
    render(<PlanetsList />, { state: false });

    expect(screen.getByText(/weren't found/i)).toBeInTheDocument();
  });
  it("component renders the specified number of cards", () => {
    const planets = INIT_TEST_STATE.planetsInfo.results;

    render(<PlanetsList />);

    expect(screen.getAllByTestId("planet").length).toEqual(planets.length);
  });

  it("list renders items according to data", () => {
    const planets = INIT_TEST_STATE.planetsInfo.results;

    render(<PlanetsList />);

    planets.forEach((planet) => {
      expect(screen.getByText(planet.name)).toBeInTheDocument();
    });
  });
});
