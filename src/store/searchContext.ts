import { createContext } from "react";
import { SearchState } from "./interfaces";

const SearchContext = createContext<SearchState>({
  planets: [],
  setPlanets: () => {},
  isLoading: false,
  setIsLoading: () => {},
});
export default SearchContext;
