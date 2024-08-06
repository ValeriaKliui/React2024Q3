import { Input } from "@components/Input";
import { useSelectedPlanets } from "@hooks/useSelectedPlanets";
import { Label } from "./styled";

export const SelectCheckbox = ({ value }) => {
  const { isSelected, selectPlanet, unselectPlanet } =
    useSelectedPlanets(value);

  const onSelect = () => {
    if (!isSelected) selectPlanet(value);
    else unselectPlanet(value);
  };

  return (
    <Label>
      Add to favourite
      <Input
        type="checkbox"
        value={value}
        onChange={onSelect}
        checked={isSelected}
      />
    </Label>
  );
};
