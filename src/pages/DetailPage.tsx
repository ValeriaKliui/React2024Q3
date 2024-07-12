import { Loader } from "@components/Loader";
import { getUrlFromParams } from "@components/PlanetsList/getUrlFromParams";
import { BASE_URL } from "@constants/index";
import { Planet } from "@constants/interfaces";
import { useFetchAndSet } from "@hooks/useFetchAndSet";
import { fetchPlanets } from "@utils/fetchPlanets";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

export const DetailPage = () => {
  const [planet, setPlanet] = useState<Planet[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { name: planetName } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const searchOptions = `?search=${planetName}`;
    fetch(BASE_URL + searchOptions)
      .then((response) => response.json())
      .then((res) => {
        setPlanet(res.results[0]);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, [planetName]);

  const {
    name,
    rotation_period,
    orbital_period,
    diameter,
    climate,
    gravity,
    terrain,
    surface_water,
    population,
    residents,
    films,
    created,
    edited,
    url,
  } = planet ?? {};

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {name} {diameter}
          {rotation_period}
          {orbital_period},{diameter},{climate},{gravity},{terrain},
          {surface_water},{population},{residents},{films},{created},{edited},
          {url},
        </div>
      )}
    </>
  );
};
