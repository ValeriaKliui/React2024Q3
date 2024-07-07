export const fetchPlanets = ({ searchValue }) => {
  return fetch(
    "https://swapi.dev/api/planets/" + `?search=${searchValue}`,
  ).then((response) => response.json());
};
