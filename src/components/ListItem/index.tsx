import { Planet } from "@constants/interfaces";
import "./index.css";

export const ListItem = ({ name, rotation_period, climate }: Planet) => (
  <div className="list_item">
    <h4 className="text_primary">{name}</h4>
    <p>Rotation period: {rotation_period} </p>
    <p>Climate: {climate}</p>
  </div>
);
