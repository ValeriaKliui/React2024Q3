import { ErrorButton } from "@components/ErrorButon";
import { SearchForm } from "@components/SearchForm";
import { PlanetsList } from "@components/PlanetsList";
import SearchContext from "@store/searchContext";
import { useMemo, useState } from "react";
import { Outlet } from "react-router-dom";
import "./index.css";
import { Pagination } from "@components/Pagination";
import { PlanetInfo } from "@store/interfaces";
import { useDetail } from "@hooks/useDetail";

const initialValue: PlanetInfo = {
  count: 0,
  next: "",
  previous: "",
  results: [],
};

export const MainPage = () => {
  const [planetsInfo, setPlanetsInfo] = useState<PlanetInfo>(initialValue);
  const [isLoading, setIsLoading] = useState(false);

  const value = useMemo(
    () => ({ planetsInfo, setPlanetsInfo, isLoading, setIsLoading }),
    [planetsInfo, setPlanetsInfo, isLoading, setIsLoading],
  );

  const { isDetailOpened } = useDetail();

  return (
    <SearchContext.Provider value={value}>
      <div className="top">
        <SearchForm />
        <ErrorButton />
      </div>
      <div className={`content ${isDetailOpened ? "splitted" : ""}`}>
        <PlanetsList />
        <Outlet />
      </div>
      <Pagination />
    </SearchContext.Provider>
  );
};
