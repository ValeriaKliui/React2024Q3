import { List } from "@components/List";
import { PlanetItem } from "@components/PlanetItem";
import { Loader } from "@components/Loader";
import { useSearchParams } from "react-router-dom";
import { useDetail } from "@hooks/useDetail";
import { Container } from "./styled";
import { useGetPlanetsQuery } from "@store/services/planetsApi";
import { useAppSelector } from "@hooks/reduxTypedHooks";
import { selectPlanets } from "@store/selectors/planetsSelectors";

export const PlanetsList = () => {
  const [searchParams] = useSearchParams();

  const searchUrlParams = searchParams.toString();
  const { isLoading } = useGetPlanetsQuery({
    searchUrlParams,
  });

  const planets = useAppSelector(selectPlanets);

  const { openDetail, closeDetail } = useDetail();
  console.log(planets.length, isLoading);

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
      ) : null}
    </Container>
  );
};
