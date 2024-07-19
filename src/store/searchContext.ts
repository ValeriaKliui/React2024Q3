import { createContext } from "react";
import { SearchState } from "./interfaces";

export const initialState = {
  planetsInfo: { count: 1, next: "", previous: "", results: [] },
  setPlanetsInfo: () => {},
  isLoading: false,
  setIsLoading: () => {},
};

const SearchContext = createContext<SearchState>(initialState);
export default SearchContext;
