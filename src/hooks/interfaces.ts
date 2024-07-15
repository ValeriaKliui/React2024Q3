import { PlanetInfo } from "@store/interfaces";

export interface FetchPlanetsProps {
  searchUrl: string;
  setIsLoading: (isLoading: boolean) => void;
  setItems: (res: PlanetInfo) => void;
}
