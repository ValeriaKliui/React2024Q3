import SearchContext from "@store/searchContext";
import { fetchPlanets } from "@utils/fetchPlanets";
import { useCallback, useContext } from "react";

export const usePlanets = () => {
  const { setIsLoading, setPlanets } = useContext(SearchContext);

  const loadPlanets = useCallback(
    ({ searchValue }) => {
      setIsLoading(true);
      fetchPlanets({ searchValue })
        .then((response) => {
          setPlanets(response.results);
          setIsLoading(false);
        })
        .catch(() => setIsLoading(false));
    },
    [setIsLoading, setPlanets],
  );

  return loadPlanets;
};
