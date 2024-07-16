import { ITEMS_PER_PAGE, PAGE_KEY } from "@constants/index";
import SearchContext from "@store/searchContext";
import { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { Pages } from "@components/Pages";

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
    <Pages
      pagesAmount={pagesAmount}
      choosenPage={choosenPage}
      onPageClick={onPageClick}
    />
  );
};
