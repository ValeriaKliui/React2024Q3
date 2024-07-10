import { useCallback } from 'react';

export const useFetchAndSet = ({
  setIsLoading,
  setItems,
  fetchFunc,
}) => {
  const loadPlanets = useCallback(
    ({ searchValue }) => {
      setIsLoading(true);
      fetchFunc({ searchValue })
        .then((response) => {
          setItems(response.results);
          setIsLoading(false);
        })
        .catch(() => setIsLoading(false));
    },
    [setIsLoading, setItems, fetchFunc]
  );

  return loadPlanets;
};
