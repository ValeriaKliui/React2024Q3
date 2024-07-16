import { Planet } from "@constants/interfaces";
import { getDiameter } from "@utils/getDiameter";
import { ListItemProps } from "./interfaces";
import { Container } from "./styled";

export const PlanetItem = ({
  name,
  diameter,
  climate,
  onClick,
}: Planet & ListItemProps) => {
  const diameterFormatted = getDiameter(diameter);

  return (
    <Container onClick={() => onClick(name)} data-testid="planet">
      <h4 className="text_primary">{name}</h4>
      <p>
        <span className="text_bold">Diameter: </span>
        {diameterFormatted}
      </p>
      <p>
        <span className="text_bold">Climate: </span>
        {climate}
      </p>
    </Container>
  );
};
