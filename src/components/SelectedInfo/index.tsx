import { Button } from "@components/Button";
import { useSelectedPlanets } from "@hooks/useSelectedPlanets";
import { getCsvUrl } from "@utils/getCsvUrl";
import { prepareArrToCsv } from "@utils/prepareArrToCsv";
import { Container } from "./styled";

export const SelectedInfo = () => {
  const { selectedPlanets, unselectAll } = useSelectedPlanets();
  const planetsAmount = selectedPlanets.length;

  const text = planetsAmount === 1 ? "item is selected" : "items are selected";
  const preparedPlanets = prepareArrToCsv(selectedPlanets, "planet");

  const planetsUrlCsv = getCsvUrl(preparedPlanets);
  console.log(planetsUrlCsv);

  return (
    <Container data-testid="flyout">
      <Button onClick={unselectAll}>Unselect all</Button>
      <p>
        {planetsAmount} {text}
      </p>
      <a href={planetsUrlCsv} download="planets.csv">
        <Button>Download</Button>
      </a>
    </Container>
  );
};
