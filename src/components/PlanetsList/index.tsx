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
  const { isFetching } = useGetPlanetsQuery({
    searchUrlParams,
  });

  const planets = useAppSelector(selectPlanets);

  const { openDetail, closeDetail } = useDetail();

  const getAddons = () => {
    if (isFetching) return <Loader testID="planets_loader" />;
    else if (planets.length === 0) return <h3>Planets weren't found</h3>;
    return null;
  };

  return (
    <Container>
      {getAddons()}
      <List
        items={planets}
        onClick={closeDetail}
        Item={(props) => <PlanetItem onClick={openDetail} {...props} />}
      />
    </Container>
  );
};
