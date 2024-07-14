import { ITEMS_PER_PAGE, SEARCH_KEY } from '@constants/index';
import { usePlanets } from '@hooks/usePlanets';
import SearchContext from '@store/searchContext';
import { useContext, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './index.css';

export const Pagination = () => {
  const { planetsInfo } = useContext(SearchContext);
  const [choosenPage, choosePage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams()

  const pagesAmount = planetsInfo.count
    ? Math.ceil(planetsInfo.count / ITEMS_PER_PAGE)
    : 0;

  const onPageClick = (pageNum: number) => {
    choosePage(pageNum);
    const search = searchParams.get(SEARCH_KEY);
    if (search) setSearchParams({ ...searchParams, search, page: String(pageNum) })
    else setSearchParams({ ...searchParams, page: String(pageNum) })
  };

  return (
    <div className="container">
      {Array(pagesAmount)
        .fill(1)
        .map((_, index) => {
          const pageNum = index + 1;
          return (
            <div
              className={`page${choosenPage === pageNum ? ' active' : ''}`}
              onClick={() => onPageClick(pageNum)}
              key={pageNum}
            >
              {pageNum}
            </div>
          );
        })}
    </div>
  );
};
