import {
  createSearchParams,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

export const useDetail = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { name } = useParams();

  const isDetailOpened = !!name;

  const openDetail = (name: string) => {
    navigate({
      pathname: `detail/${name}`,
      search: createSearchParams(searchParams).toString(),
    });
  };
  const closeDetail = () => {
    isDetailOpened &&
      navigate({
        pathname: `/`,
        search: createSearchParams(searchParams).toString(),
      });
  };

  return { openDetail, closeDetail, isDetailOpened };
};
