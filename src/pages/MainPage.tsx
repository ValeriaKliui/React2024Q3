import { ErrorButton } from "@components/ErrorButon";
import { SearchForm } from "@components/SearchForm";
import { PlanetsList } from "@components/PlanetsList";
import { Planet } from "@constants/interfaces";
import SearchContext from "@store/searchContext";
import { useMemo, useState } from "react";
import { Outlet } from "react-router-dom";
import "./index.css";

export const MainPage = () => {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const value = useMemo(
    () => ({ planets, setPlanets, isLoading, setIsLoading }),
    [planets, setPlanets, isLoading, setIsLoading]
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
      </div>
    </SearchContext.Provider>
  );
};
