import { createContext } from "react";
import { SearchState } from "./interfaces";

const SearchContext = createContext<SearchState>({
  planetsInfo: { count: 1, next: "", previous: "", results: [] },
  setPlanetsInfo: () => {},
  isLoading: false,
  setIsLoading: () => {},
});
export default SearchContext;
