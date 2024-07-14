import { Planet } from "@constants/interfaces";
import { getDiameter } from "@utils/getDiameter";
import "./index.css";
import { ListItemProps } from "./interfaces";

export const ListItem = ({
  name,
  diameter,
  climate,
  onClick,
}: Planet & ListItemProps) => {
  const diameterFormatted = getDiameter(diameter)

  return (
    <div className="list_item" onClick={() => onClick(name)}>
      <h4 className="text_primary">{name}</h4>
      <p>
        <span className="text_bold">Diameter: </span>
        {diameterFormatted}
      </p>
      <p>
        <span className="text_bold">Climate: </span>
        {climate}
      </p>
    </div>
  );
};
