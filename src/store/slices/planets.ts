import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "./interfaces";
import { planetsApi } from "@store/services/planetsApi";
import { PlanetsInfo } from "@store/interfaces";

const initialState: InitialState = {
  planets: [],
  count: 0,
  selectedPlanets: [],
};

const planetsSlice = createSlice({
  name: "planets",
  initialState,
  reducers: {
    selectPlanet: (state, { payload }: PayloadAction<string>) => {
      state.selectedPlanets = [...state.selectedPlanets, payload];
    },
    unselectPlanet: (state, { payload }: PayloadAction<string>) => {
      state.selectedPlanets = state.selectedPlanets.filter(
        (planet) => planet !== payload,
      );
    },
    unselectAllPlanets: (state) => {
      state.selectedPlanets = [];
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      planetsApi.endpoints.getPlanets.matchFulfilled,
      (state, { payload }: PayloadAction<PlanetsInfo>) => {
        state.count = payload.count;
        state.planets = payload.results;
      },
    );
  },
});

export const { selectPlanet, unselectPlanet, unselectAllPlanets } =
  planetsSlice.actions;

export default planetsSlice.reducer;
