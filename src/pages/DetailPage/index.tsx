import { Loader } from '@components/Loader';
import { getUrlFromParams } from '@components/PlanetsList/getUrlFromParams';
import { BASE_URL } from '@constants/index';
import { Planet } from '@constants/interfaces';
import { useFetchAndSet } from '@hooks/useFetchAndSet';
import { fetchPlanets } from '@utils/fetchPlanets';
import { getDiameter } from '@utils/getDiameter';
import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import './index.css'

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

  const diameterFormatted = getDiameter(diameter);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container">
          <h3 className="text_primary">{name}</h3>
          <p>
            <span className="text_bold">Diameter: </span>
            {diameter}
          </p>
          <p>
            <span className="text_bold">Rotation period: </span>
            {rotation_period}
          </p>
          <p>
            <span className="text_bold">Gravity: </span>
            {gravity}
          </p>
          <p>
            <span className="text_bold">Climate: </span>
            {climate}
          </p>

        </div>
      )}
    </>
  );
};
