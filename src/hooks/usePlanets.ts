import SearchContext from "@store/searchContext";
import { useContext } from "react";

export const usePlanets = () => {
  const { planetsInfo } = useContext(SearchContext);

  const planets = planetsInfo.results || [];

  return planets;
};
