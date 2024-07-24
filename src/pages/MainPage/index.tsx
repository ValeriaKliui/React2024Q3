import { PlanetsList } from "@components/PlanetsList";
import { Outlet } from "react-router-dom";
import "./index.css";
import { Pagination } from "@components/Pagination";
import { useDetail } from "@hooks/useDetail";
import { Header } from "@components/Header";

export const MainPage = () => {
  const { isDetailOpened } = useDetail();

  return (
    <>
      <Header />
      <div className={`content ${isDetailOpened ? "splitted" : ""}`}>
        <PlanetsList />
        <Outlet />
      </div>
      <Pagination />
    </>
  );
};
