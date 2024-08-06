import { describe, it } from "vitest";
import { renderWithProviders, setup } from "../utils";
import { PlanetItem } from "@components/PlanetItem";
import { screen } from "@testing-library/react";
import { PlanetsList } from "@components/PlanetsList";
import { INIT_TEST_STATE } from "../mocks";

const { name, diameter, climate } = INIT_TEST_STATE.results[0];

const PlanetComponent = (
  <PlanetItem
    name={name}
    diameter={diameter}
    climate={climate}
    onClick={() => { }}
  />
);

describe("planetItem", () => {
  it("card component renders the relevant card data", () => {
    renderWithProviders(PlanetComponent);

    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(climate)).toBeInTheDocument();
  });

  it("clicking on a card opens a detailed card component", async () => {
    const { user, findAllByTestId } = setup(<PlanetsList />);

    expect(window.location.href).not.toContain("detail");

    await user.click((await findAllByTestId("planet"))[0]);
    expect(window.location.href).toContain("detail");
    expect(window.location.href).toContain(name);
  });
});
