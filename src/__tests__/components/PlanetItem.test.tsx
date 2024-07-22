import { describe, it } from "vitest";
import { render, setup } from "../utils";
import { PlanetItem } from "@components/PlanetItem";
import { screen } from "@testing-library/react";
import { getDiameter } from "@utils/getDiameter";
import { PlanetsList } from "@components/PlanetsList";

const name = "Zorro";
const diameter = "123";
const climate = "temperate";
const PlanetComponent = (
  <PlanetItem
    name={name}
    diameter={diameter}
    climate={climate}
    onClick={() => {}}
  />
);

describe("planetItem", () => {
  it("card component renders the relevant card data", () => {
    render(PlanetComponent);

    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(getDiameter(diameter))).toBeInTheDocument();
    expect(screen.getByText(climate)).toBeInTheDocument();
  });

  it("clicking on a card opens a detailed card component", async () => {
    const { user } = setup(<PlanetsList />);

    expect(window.location.href).not.toContain("detail");

    await user.click(screen.getAllByTestId("planet")[0]);
    expect(window.location.href).toContain("detail");
    expect(window.location.href).toContain(name);
  });
});
