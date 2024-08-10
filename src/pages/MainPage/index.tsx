import { PlanetsList } from "@components/PlanetsList";
import { Outlet } from "react-router-dom";
import { Pagination } from "@components/Pagination";
import { useDetail } from "@hooks/useDetail";
import { Header } from "@components/Header";
import { SelectedInfo } from "@components/SelectedInfo";
import { useSelectedPlanets } from "@hooks/useSelectedPlanets";
import { Content } from "./styled";

export const MainPage = () => {
  const { isDetailOpened } = useDetail();
  const { selectedPlanets } = useSelectedPlanets();

  return (
    <>
      <Header />
      <Content className={`content ${isDetailOpened ? "splitted" : ""}`}>
        <PlanetsList />
        <Outlet />
      </Content>
      <Pagination />
      {selectedPlanets.length > 0 && <SelectedInfo />}
    </>
  );
};
