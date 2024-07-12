import { ITEMS_PER_PAGE } from "@constants/index";
import { usePlanets } from "@hooks/usePlanets";
import SearchContext from "@store/searchContext";
import { useContext } from "react";

export const Pagination = () => {
  const { planetsInfo } = useContext(SearchContext);
  console.log(
    planetsInfo,
    planetsInfo.count,
    planetsInfo.count / ITEMS_PER_PAGE
  );

  const pagesAmount = planetsInfo.count / ITEMS_PER_PAGE;
  console.log(pagesAmount);

  return <></>;
};
