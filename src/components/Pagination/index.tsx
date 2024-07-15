import { ITEMS_PER_PAGE, PAGE_KEY } from "@constants/index";
import SearchContext from "@store/searchContext";
import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { Container, Page } from "./styled";

export const Pagination = () => {
  const { planetsInfo } = useContext(SearchContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const choosenPage = Number(searchParams.get(PAGE_KEY)) || 1;

  const pagesAmount = planetsInfo.count
    ? Math.ceil(planetsInfo.count / ITEMS_PER_PAGE)
    : 0;

  const onPageClick = (pageNum: number) => {
    searchParams.set(PAGE_KEY, String(pageNum));
    setSearchParams(searchParams);
  };

  return (
    <Container>
      {Array(pagesAmount)
        .fill(1)
        .map((_, index) => {
          const pageNum = index + 1;
          return (
            <Page
              onClick={() => onPageClick(pageNum)}
              key={pageNum}
              $active={choosenPage === pageNum}
            >
              {pageNum}
            </Page>
          );
        })}
    </Container>
  );
};
