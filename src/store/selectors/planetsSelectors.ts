import { RootState } from "@store/store";

export const selectPlanets = (state: RootState) => state.planets.planets;
export const selectPlanetsCount = (state: RootState) => state.planets.count;
export const selectSelectedPlanets = (state: RootState) =>
  state.planets.selectedPlanets;
