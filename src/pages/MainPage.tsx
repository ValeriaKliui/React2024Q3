import { ErrorButton } from "@components/ErrorButon";
import { SearchForm } from "@components/SearchForm";
import { SearchList } from "@components/SearchList";
import { Planet } from "@constants/interfaces";
import SearchContext from "@store/searchContext";
import { useMemo, useState } from "react";
import { Outlet, useNavigate, useSearchParams } from "react-router-dom";
import "./index.css";

export const MainPage = () => {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [URLParams] = useSearchParams()
  const isDetailedOpened = !!URLParams.get('detail')
  const navigate = useNavigate()

  const value = useMemo(
    () => ({ planets, setPlanets, isLoading, setIsLoading }),
    [planets, setPlanets, isLoading, setIsLoading],
  );
  const closeDetails = () => isDetailedOpened && navigate('..')

  return (
    <SearchContext.Provider value={value}>

      <div className="top">
        <SearchForm />
        <ErrorButton />
      </div>
      <div className={`bottom ${isDetailedOpened ? 'splitted' : ''}`}>
        <SearchList onClick={closeDetails} />
        <Outlet />
      </div>
    </SearchContext.Provider>
  );
};
