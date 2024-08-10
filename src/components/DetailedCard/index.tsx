import { Loader } from "@components/Loader";
import { useParams } from "react-router-dom";
import { DetailInfo } from "@components/DetailInfo";
import { useDetail } from "@hooks/useDetail";
import { Container, CloseButton } from "./styled";
import { useGetPlanetInfoQuery } from "@store/services/planetsApi";
import { SelectCheckbox } from "@components/SelectCheckbox";

export const DetailedCard = () => {
  const { name: planetName } = useParams();
  const { closeDetail } = useDetail();

  const searchUrlParams = `search=${planetName}`;
  const { isFetching, data } = useGetPlanetInfoQuery({
    searchUrlParams,
  });

  const planet = data?.results[0];
  const { name, rotation_period, diameter, climate, gravity } = planet ?? {};

  return (
    <Container>
      {isFetching ? (
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
          <SelectCheckbox value={name} />
        </>
      )}
    </Container>
  );
};
