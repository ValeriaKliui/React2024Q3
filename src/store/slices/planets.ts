import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "./interfaces";
import { planetsApi } from "@store/services/planetsApi";
import { PlanetsInfo } from "@store/interfaces";

const initialState: InitialState = {
  planets: [],
  count: 0,
};

const slice = createSlice({
  name: "planets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      planetsApi.endpoints.getPlanets.matchFulfilled,
      (state, { payload }: PayloadAction<PlanetsInfo>) => {
        state.count = payload.count;
        state.planets = payload.results;
      }
    );
  },
});

export default slice.reducer;
