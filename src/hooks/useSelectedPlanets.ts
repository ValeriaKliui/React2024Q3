import { selectSelectedPlanets } from "@store/selectors/planetsSelectors";
import { useAppDispatch, useAppSelector } from "./reduxTypedHooks";
import { selectPlanet, unselectPlanet } from "@store/slices/planets";
import { useCallback, useMemo } from "react";

export const useSelectedPlanets = (value?: string) => {
  const dispatch = useAppDispatch();
  const selectedPlanets = useAppSelector(selectSelectedPlanets);
  const isSelected = value ? selectedPlanets.includes(value) : false;

  const select = useCallback(
    (value: string) => {
      dispatch(selectPlanet(value));
    },
    [dispatch],
  );

  const unselect = useCallback(
    (value: string) => {
      dispatch(unselectPlanet(value));
    },
    [dispatch],
  );

  const memoized = useMemo(
    () => ({
      isSelected,
      selectPlanet: select,
      unselectPlanet: unselect,
      selectedPlanets,
    }),
    [isSelected, unselect, select, selectedPlanets],
  );

  return memoized;
};
