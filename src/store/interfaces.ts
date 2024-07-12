import { Planet } from "@constants/interfaces";

export interface PlanetInfo {
  count: number;
  next: string;
  previous: string;
  results: Planet[];
}

export interface SearchState {
  planetsInfo: PlanetInfo;
  setPlanetsInfo: (planetInfo: PlanetInfo) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}
