import { PlanetsList } from "@components/PlanetsList";
import SearchContext from "@store/searchContext";
import { useMemo, useState } from "react";
import { Outlet } from "react-router-dom";
import "./index.css";
import { Pagination } from "@components/Pagination";
import { PlanetsInfo } from "@store/interfaces";
import { useDetail } from "@hooks/useDetail";
import { Header } from "@components/Header";

const initialValue: PlanetsInfo = {
  count: 0,
  next: "",
  previous: "",
  results: [],
};

export const MainPage = () => {
  const [planetsInfo, setPlanetsInfo] = useState<PlanetsInfo>(initialValue);
  const [isLoading, setIsLoading] = useState(false);

  const value = useMemo(
    () => ({ planetsInfo, setPlanetsInfo, isLoading, setIsLoading }),
    [planetsInfo, setPlanetsInfo, isLoading, setIsLoading]
  );

  const { isDetailOpened } = useDetail();

  return (
    <SearchContext.Provider value={value}>
      <Header />
      <div className={`content ${isDetailOpened ? "splitted" : ""}`}>
        <PlanetsList />
        <Outlet />
      </div>
      <Pagination />
    </SearchContext.Provider>
  );
};
