import { getDiameter } from "@utils/getDiameter";
import { FC } from "react";
import { DetailInfoProps } from "./interfaces";

export const DetailInfo: FC<DetailInfoProps> = ({
  name,
  rotationPeriod,
  diameter,
  climate,
  gravity,
}) => {
  const diameterFormatted = getDiameter(diameter);

  return (
    <div>
      <h3 className="text_primary">{name}</h3>
      <p>
        <span className="text_bold">Diameter: </span>
        {diameterFormatted}
      </p>
      <p>
        <span className="text_bold">Rotation period: </span>
        {rotationPeriod}
      </p>
      <p>
        <span className="text_bold">Gravity: </span>
        {gravity}
      </p>
      <p>
        <span className="text_bold">Climate: </span>
        {climate}
      </p>
    </div>
  );
};
