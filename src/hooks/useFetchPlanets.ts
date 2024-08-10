import { BASE_URL } from "@constants/index";
import { useEffect } from "react";
import { FetchPlanetsProps } from "./interfaces";

export const useFetchPlanets = ({
  searchUrl,
  setIsLoading,
  setItems,
}: FetchPlanetsProps) => {
  useEffect(() => {
    let canceled = false;

    setIsLoading(true);
    fetch(BASE_URL + "?" + searchUrl)
      .then((response) => response.json())
      .then((res) => {
        if (!canceled) {
          setItems(res);
          setIsLoading(false);
        }
      })
      .catch(() => setIsLoading(false));

    return () => {
      canceled = true;
    };
  }, [setIsLoading, searchUrl, setItems]);
};
