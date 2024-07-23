import { RootState } from "@store/store";

export const selectPlanets = (state: RootState) => state.planets.planets;
