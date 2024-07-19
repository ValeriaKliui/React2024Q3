import { Loader } from "@components/Loader";
import { Planet } from "@constants/interfaces";
import { useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import { DetailInfo } from "@components/DetailInfo";
import { useDetail } from "@hooks/useDetail";
import { useFetchPlanets } from "@hooks/useFetchPlanets";
import { PlanetInfo } from "@store/interfaces";
import { Container, CloseButton } from "./styled";

export const DetailedCard = () => {
  const [planet, setPlanet] = useState<Planet | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { name: planetName } = useParams();
  const { closeDetail } = useDetail();

  const setItems = useCallback(
    (res: PlanetInfo) => {
      setPlanet(res.results[0]);
    },
    [setPlanet],
  );

  useFetchPlanets({
    searchUrl: `search=${planetName}`,
    setIsLoading,
    setItems,
  });

  const { name, rotation_period, diameter, climate, gravity } = planet ?? {};

  return (
    <Container>
      {isLoading ? (
        <Loader testID="detail_loader" />
      ) : (
        <>
          <CloseButton onClick={closeDetail} data-testid="close" />
          <DetailInfo
            name={name}
            rotationPeriod={rotation_period}
            diameter={diameter}
            climate={climate}
            gravity={gravity}
          />
        </>
      )}
    </Container>
  );
};
