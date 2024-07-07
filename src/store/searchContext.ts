import { createContext } from "react";

const SearchContext = createContext({
  planets: [],
  setPlanets: () => {},
});
export default SearchContext;
