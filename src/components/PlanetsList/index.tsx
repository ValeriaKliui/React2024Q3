import { List } from "@components/List";
import { PlanetItem } from "@components/PlanetItem";
import { Loader } from "@components/Loader";
import { useSearchParams } from 'next/navigation';
import { useDetail } from "@hooks/useDetail";
import { Container } from "./styled";
import { useGetPlanetsQuery } from "@store/services/planetsApi";
import { useAppSelector } from "@hooks/reduxTypedHooks";
import { selectPlanets } from "@store/selectors/planetsSelectors";
import { useRouter } from "next/router";

export const PlanetsList = () => {
  const { isReady } = useRouter()
  const searchParams = useSearchParams();

  const searchUrlParams = searchParams?.toString() ?? '';

  useGetPlanetsQuery({
    searchUrlParams,
  }, { skip: !isReady });

  const planets = useAppSelector(selectPlanets);

  const { openDetail, } = useDetail();

  const getAddons = () => {
    if (!isReady) return <Loader testID="planets_loader" />;
    else if (planets.length === 0) return <h3>Planets weren't found</h3>;
    return <></>;
  };
  // console.log(isFetching, planets.length)

  return (
    <Container>
      {/* {getAddons()} */}
      <List
        items={planets}
        // onClick={closeDetail}
        Item={(props) => <PlanetItem onClick={openDetail} {...props} />}
      />
    </Container>
  );
};
