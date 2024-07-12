import { createContext } from "react";
import { SearchState } from "./interfaces";

const SearchContext = createContext<SearchState>({
  planetsInfo: {},
  setPlanetsInfo: () => {},
  isLoading: false,
  setIsLoading: () => {},
});
export default SearchContext;
