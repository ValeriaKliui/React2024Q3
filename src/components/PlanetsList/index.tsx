'use client';
import { List } from "@components/List";
import { PlanetItem } from "@components/PlanetItem";
import { useSearchParams } from "next/navigation";
import { useDetail } from "@hooks/useDetail";
import { Container } from "./styled";
import { useGetPlanetsQuery } from "@store/services/planetsApi";
import { useAppSelector } from "@hooks/reduxTypedHooks";
import { selectPlanets } from "@store/selectors/planetsSelectors";

export const PlanetsList = () => {
  const searchParams = useSearchParams();

  const searchUrlParams = searchParams?.toString() ?? "";

  useGetPlanetsQuery(
    {
      searchUrlParams,
    },
  );

  const planets = useAppSelector(selectPlanets);

  const { openDetail } = useDetail();

  // const getAddons = () => {
  //   if (!isReady) return <Loader testID="planets_loader" />;
  //   else if (planets.length === 0) return <h3>Planets weren't found</h3>;
  //   return <></>;
  // };

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
