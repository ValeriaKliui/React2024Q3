import { List } from "@components/List";
import { ListItem } from "@components/ListItem";
import { Loader } from "@components/Loader";
import { SEARCH_KEY } from "@constants/index";
import { usePlanets } from "@hooks/usePlanets";
import SearchContext from "@store/searchContext";
import { getSavedValueByKey } from "@utils/getSavedValue";
import { useContext, useEffect } from "react";

export const SearchList = () => {
  const { isLoading, planets } = useContext(SearchContext);

  const loadPlanets = usePlanets();

  useEffect(() => {
    const searchValue = getSavedValueByKey(SEARCH_KEY);

    loadPlanets({ searchValue });
  }, [loadPlanets]);

  if (isLoading) return <Loader />;
  if (planets.length === 0) return <div>Planets weren't found</div>;
  return <List items={planets} Item={ListItem} />;
};
