import { ITEMS_PER_PAGE, PAGE_KEY } from "@constants/index";
import { useSearchParams, } from 'next/navigation';
import { Pages } from "@components/Pages";
import { useSelector } from "react-redux";
import { selectPlanetsCount } from "@store/selectors/planetsSelectors";
import { Container } from "./styled";
import { useRouter } from "next/router";

export const Pagination = () => {
  const { push, pathname, query, route } = useRouter()
  const planetsTotal = useSelector(selectPlanetsCount);
  const searchParams = useSearchParams();

  const choosenPage = searchParams?.size === 0 ? 1 : Number(searchParams.get(PAGE_KEY));

  const pagesAmount = planetsTotal
    ? Math.ceil(planetsTotal / ITEMS_PER_PAGE)
    : 0;

  const onPageClick = (pageNum: number) => {
    const params = searchParams && new URLSearchParams(searchParams)
    params?.set(PAGE_KEY, String(pageNum));

    push({ query: params?.toString(), pathname: query?.name })
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
