import { List } from "@components/List";
import { PlanetItem } from "@components/PlanetItem";
import { Loader } from "@components/Loader";
import SearchContext from "@store/searchContext";
import { useCallback, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { usePlanets } from "@hooks/usePlanets";
import { useDetail } from "@hooks/useDetail";
import { Container } from "./styled";
import { useFetchPlanets } from "@hooks/useFetchPlanets";
import { PlanetInfo } from "@store/interfaces";

export const PlanetsList = () => {
  const { isLoading, setIsLoading, setPlanetsInfo, planetsInfo } =
    useContext(SearchContext);
  const planets = usePlanets();

  const [searchParams] = useSearchParams();

  const { openDetail, closeDetail } = useDetail();

  const setItems = useCallback(
    (res: PlanetInfo) => {
      setPlanetsInfo(res);
    },
    [setPlanetsInfo]
  );

  useFetchPlanets({
    searchUrl: searchParams.toString(),
    setIsLoading,
    setItems,
  });

  return (
    <Container>
      {planets.length === 0 &&
        (isLoading ? <Loader /> : <h3>Planets weren't found</h3>)}
      {planets.length && !isLoading ? (
        <List
          items={planets}
          onClick={closeDetail}
          Item={(props) => <PlanetItem onClick={openDetail} {...props} />}
        />
      ) : (
        <></>
      )}
    </Container>
  );
};
