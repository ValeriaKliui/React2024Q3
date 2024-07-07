import { Component } from "react";
import { fetchPlanets } from "./fetchPlanets";

export const loadPlanets = (component: Component) => (searchValue: string) => {
  component.changeLoadingStatus(true);

  fetchPlanets({ searchValue })
    .then((response) => {
      component.context.setPlanets(response.results);
      component.changeLoadingStatus(false);
    })
    .catch(() => component.changeLoadingStatus(false));
};
