import { List } from "@components/List";
import { ListItem } from "@components/ListItem";
import { Loader } from "@components/Loader";
import { BASE_URL, SEARCH_KEY } from "@constants/index";
import SearchContext from "@store/searchContext";
import { useContext, useEffect } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { getUrlFromParams } from "./getUrlFromParams";
import { usePlanets } from "@hooks/usePlanets";

export const PlanetsList = () => {
  const { isLoading, setIsLoading, setPlanetsInfo } = useContext(SearchContext);
  const planets = usePlanets();

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const onPlanetClick = (name: string) =>
    navigate({
      pathname: `detail/${name}`,
      search: createSearchParams({
        search: searchParams.get(SEARCH_KEY),
      }).toString(),
    });
  const searchOptions = getUrlFromParams(searchParams);

  useEffect(() => {
    let canceled = false;
    // console.log(searchOptions)

    setIsLoading(true);
    fetch(BASE_URL + searchOptions)
      .then((response) => response.json())
      .then((res) => {
        if (!canceled) {
          setPlanetsInfo(res);
          setIsLoading(false);
        }
      })
      .catch(() => setIsLoading(false));

    return () => {
      canceled = true;
    };
  }, [setIsLoading, searchOptions, setPlanetsInfo]);

  if (isLoading) return <Loader />;
  if (planets.length === 0) return <div>Planets weren't found</div>;

  return (
    <List
      items={planets}
      Item={(props) => <ListItem onClick={onPlanetClick} {...props} />}
    />
  );
};
