import { List } from "@components/List";
import { ListItem } from "@components/ListItem";
import { Loader } from "@components/Loader";
import { BASE_URL, SEARCH_KEY } from "@constants/index";
import { useLocalStorage } from "@hooks/useLocalStorage";
import { useFetchAndSet } from "@hooks/useFetchAndSet";
import SearchContext from "@store/searchContext";
import { fetchPlanets } from "@utils/fetchPlanets";
import { useContext, useEffect } from "react";
import { useLoaderData, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { getUrlFromParams } from "./getUrlFromParams";

export const PlanetsList = () => {
  const { planets } = useLoaderData()

  // const { isLoading, planets } = useContext(SearchContext);
  // const [searchValue] = useLocalStorage(SEARCH_KEY, "");
  // const { name } = useParams();
  // const [searchParams, setSearchParams] = useSearchParams();

  // const navigate = useNavigate();
  // const { setIsLoading, setPlanets } = useContext(SearchContext);
  // console.log(searchParams);

  // useEffect(() => {
  //   let canceled = false;
  //   let searchOptionsURL = getUrlFromParams(searchParams);

  //   setIsLoading(true);

  //   fetch(BASE_URL + searchOptionsURL)
  //     .then((response) => response.json())
  //     .then((res) => { setPlanets(res.results); setIsLoading(false) })
  //     .catch(() => setIsLoading(false));

  //   // fetchPlanets({ searchValue })
  //   //   .then((response) => {
  //   //     if (!canceled) {
  //   //       setIsLoading(false);
  //   //       setPlanets(response.results);
  //   //     }
  //   //   })
  //   //   .catch(() => setIsLoading(false));
  //   return () => {
  //     canceled = true;
  //   };
  // }, [setIsLoading, setPlanets]);

  const onPlanetClick = (name: string) => {
    // navigate(`detail/${name}/`);
    // fetchPlanets({ searchValue: name })
    //   .then((response) => {
    //     setIsLoading(false);
    //     setPlanets(response.results);
    //   })
    //   .catch(() => setIsLoading(false));
    // // setUrlParams({ ...urlParams, page: "2" });
  };

  // useEffect(() => {
  //   searchValue && setSearchParams({ ...searchParams, search: searchValue });
  // }, [searchValue, searchParams, setSearchParams]);

  // if (isLoading) return <Loader />;
  // if (planets.length === 0) return <div>Planets weren't found</div>;

  return (
    <List
      items={planets}
      Item={({ name, ...props }) => (
        <ListItem name={name} onClick={onPlanetClick} {...props} />
      )}
    />
  );
};
