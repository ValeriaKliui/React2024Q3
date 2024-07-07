import SearchContext from "@store/searchContext";
import { Component, ContextType } from "react";
import { fetchPlanets } from "./fetchPlanets";

interface FetchedComponent extends Component {
  changeLoadingStatus: (status: boolean) => void;
  context: ContextType<typeof SearchContext>;
}

export const loadPlanets =
  (component: FetchedComponent) => (searchValue: string) => {
    component.changeLoadingStatus(true);

    fetchPlanets({ searchValue })
      .then((response) => {
        component.context.setPlanets(response.results);
        component.changeLoadingStatus(false);
      })
      .catch(() => component.changeLoadingStatus(false));
  };
