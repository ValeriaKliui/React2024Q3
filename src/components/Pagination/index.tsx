import { ITEMS_PER_PAGE, PAGE_KEY } from "@constants/index";
import { useSearchParams } from "react-router-dom";
import { Pages } from "@components/Pages";
import { useSelector } from "react-redux";
import { selectPlanetsCount } from "@store/selectors/planetsSelectors";
import { Container } from "./styled";

export const Pagination = () => {
  const planetsTotal = useSelector(selectPlanetsCount);
  const [searchParams, setSearchParams] = useSearchParams();

  const choosenPage = Number(searchParams.get(PAGE_KEY)) || 1;

  const pagesAmount = planetsTotal
    ? Math.ceil(planetsTotal / ITEMS_PER_PAGE)
    : 0;

  const onPageClick = (pageNum: number) => {
    searchParams.set(PAGE_KEY, String(pageNum));
    setSearchParams(searchParams);
  };

  return (
    <Container>
      <Pages
        pagesAmount={pagesAmount}
        choosenPage={choosenPage}
        onPageClick={onPageClick}
      />
    </Container>
  );
};
