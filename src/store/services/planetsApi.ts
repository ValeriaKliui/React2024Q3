import { BASE_URL } from "@constants/index";
import { baseApi } from "./baseApi";
import { PlanetsParams } from "./interfaces";
import { PlanetsInfo } from "@store/interfaces";

export const planetsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPlanets: build.query<PlanetsInfo, PlanetsParams>({
      query: ({ searchUrlParams }) => BASE_URL + "?" + searchUrlParams,
    }),
    getPlanetInfo: build.query<PlanetsInfo, PlanetsParams>({
      query: ({ searchUrlParams }) => BASE_URL + "?" + searchUrlParams,
    }),
  }),
  overrideExisting: false,
});

export const { useGetPlanetsQuery, useGetPlanetInfoQuery } = planetsApi;
