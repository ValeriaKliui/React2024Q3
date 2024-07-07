import { Planet } from '@constants/interfaces';

export interface SearchState {
  planets: Planet[];
  setPlanets: (planets: Planet[]) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}
