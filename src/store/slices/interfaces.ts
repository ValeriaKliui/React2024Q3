import { Planet } from "@constants/interfaces";

export interface InitialState {
  count: number;
  planets: Planet[];
  selectedPlanets: string[];
}
