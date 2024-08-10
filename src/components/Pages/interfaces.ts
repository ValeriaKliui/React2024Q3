export interface PagesProps {
  pagesAmount: number;
  choosenPage: number;
  onPageClick: (page: number) => void;
}
