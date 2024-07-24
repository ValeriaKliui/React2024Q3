import { PlanetsList } from "@components/PlanetsList";
import { Outlet } from "react-router-dom";
import "./index.css";
import { Pagination } from "@components/Pagination";
import { useDetail } from "@hooks/useDetail";
import { Header } from "@components/Header";
import { SelectedInfo } from "@components/SelectedInfo";
import { useSelectedPlanets } from "@hooks/useSelectedPlanets";

export const MainPage = () => {
  const { isDetailOpened } = useDetail();
  const { selectedPlanets } = useSelectedPlanets();
  console.log(selectedPlanets);

  return (
    <>
      <Header />
      <div className={`content ${isDetailOpened ? "splitted" : ""}`}>
        <PlanetsList />
        <Outlet />
      </div>
      <Pagination />
      {selectedPlanets.length > 0 && <SelectedInfo />}
    </>
  );
};
