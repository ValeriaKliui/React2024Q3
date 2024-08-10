import { selectSelectedPlanets } from "@store/selectors/planetsSelectors";
import { useAppDispatch, useAppSelector } from "./reduxTypedHooks";
import {
  selectPlanet,
  unselectAllPlanets,
  unselectPlanet,
} from "@store/slices/planets";
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

  const unselectAll = useCallback(
    () => dispatch(unselectAllPlanets()),
    [dispatch],
  );

  const memoized = useMemo(
    () => ({
      isSelected,
      selectPlanet: select,
      unselectPlanet: unselect,
      selectedPlanets,
      unselectAll,
    }),
    [isSelected, unselect, select, selectedPlanets, unselectAll],
  );

  return memoized;
};
