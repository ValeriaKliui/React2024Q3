import { List } from "@components/List";
import { ListItem } from "@components/ListItem";
import { Loader } from "@components/Loader";
import { SEARCH_KEY } from "@constants/index";
import { useLocalStorage } from "@hooks/useLocalStorage";
import { usePlanets } from "@hooks/usePlanets";
import SearchContext from "@store/searchContext";
import { useContext, useEffect } from "react";

export const SearchList = () => {
  const { isLoading, planets } = useContext(SearchContext);
  const [savedSearchValue] = useLocalStorage(SEARCH_KEY, "");

  const loadPlanets = usePlanets();

  useEffect(() => {
    loadPlanets({ searchValue: savedSearchValue });
  }, [loadPlanets, savedSearchValue]);

  if (isLoading) return <Loader />;
  if (planets.length === 0) return <div>Planets weren't found</div>;
  return <List items={planets} Item={ListItem} />;
};
