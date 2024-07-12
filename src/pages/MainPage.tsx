import { ErrorButton } from "@components/ErrorButon";
import { SearchForm } from "@components/SearchForm";
import { PlanetsList } from "@components/PlanetsList";
import { Planet } from "@constants/interfaces";
import SearchContext from "@store/searchContext";
import { useMemo, useState } from "react";
import { Outlet } from "react-router-dom";
import "./index.css";
import { Pagination } from "@components/Pagination";
import { PlanetInfo } from "@store/interfaces";

export const MainPage = () => {
  const [planetsInfo, setPlanetsInfo] = useState<PlanetInfo>({});
  const [isLoading, setIsLoading] = useState(false);

  const value = useMemo(
    () => ({ planetsInfo, setPlanetsInfo, isLoading, setIsLoading }),
    [planetsInfo, setPlanetsInfo, isLoading, setIsLoading]
  );

  return (
    <SearchContext.Provider value={value}>
      <div className="top">
        <SearchForm />
        <ErrorButton />
      </div>
      <div className={`bottom`}>
        <Outlet />
        <PlanetsList />
        <Pagination />
      </div>
    </SearchContext.Provider>
  );
};
