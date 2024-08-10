import { FC } from "react";
import { Container, Page } from "./styled";
import { PagesProps } from "./interfaces";

export const Pages: FC<PagesProps> = ({
  pagesAmount,
  choosenPage,
  onPageClick,
}) => (
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
            aria-label={`${pageNum} page`}
          >
            {pageNum}
          </Page>
        );
      })}
  </Container>
);
