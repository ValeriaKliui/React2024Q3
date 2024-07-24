import { Input } from "@components/Input";
import { useSelectedPlanets } from "@hooks/useSelectedPlanets";

export const SelectCheckbox = ({ value }) => {
  const { isSelected, selectPlanet, unselectPlanet } =
    useSelectedPlanets(value);

  const onSelect = () => {
    if (!isSelected) selectPlanet(value);
    else unselectPlanet(value);
  };

  return (
    <Input
      type="checkbox"
      value={value}
      onChange={onSelect}
      checked={isSelected}
    />
  );
};
