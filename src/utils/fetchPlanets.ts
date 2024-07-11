import { BASE_URL } from "@constants/index";

export const fetchPlanets = ({ searchValue }: { searchValue: string }) => {
  // const options = searchValue ? `?search=${searchValue}` : "";
  const options = "";

  return fetch(BASE_URL + options).then((response) => response.json());
};
