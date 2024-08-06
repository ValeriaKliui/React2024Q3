import { useRouter, useParams } from "next/navigation";

export const useDetail = () => {
  const { replace, push } = useRouter();

  const params = useParams();
  const { name } = params ?? {};

  const isDetailOpened = !!name;

  const openDetail = (name: string) => {
    if (isDetailOpened) replace(`/detail/${name}/`);
    else push(`/detail/${name}/`);
  };

  const closeDetail = () => {
    replace("/");
  };

  return { openDetail, closeDetail, isDetailOpened };
};
