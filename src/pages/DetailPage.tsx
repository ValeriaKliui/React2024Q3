import { Loader } from "@components/Loader";
import { BASE_URL } from "@constants/index";
import { Planet } from "@constants/interfaces";
import { useFetchAndSet } from "@hooks/useFetchAndSet";
import { fetchPlanets } from "@utils/fetchPlanets";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

export const DetailPage = () => {
  const { name: planetName } = useParams();
  const [planet, setPlanet] = useState<Planet[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

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

  // useEffect(() => {
  //   let canceled = false;

  //   setIsLoading(true);
  //   fetchPlanets({ searchValue: planetName })
  //     .then((response) => {
  //       if (!canceled) {
  //         setIsLoading(false);
  //         setPlanet(response.results[0]);
  //       }
  //     })
  //     .catch(() => setIsLoading(false));
  //   return () => {
  //     canceled = true;
  //   };
  // }, [planetName]);

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
