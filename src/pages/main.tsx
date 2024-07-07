import { ErrorButton } from "@components/ErrorButon";
import { SearchForm } from "@components/SearchForm";
import { SearchList } from "@components/SearchList";
import { Planet } from "@constants/interfaces";
import SearchContext from "@store/searchContext";
import { Component } from "react";
import './index.css'

export class MainPage extends Component {
  setPlanets = (planets: Planet[]) => {
    this.setState({ planets });
  };
  setIsLoading = (isLoading: boolean) => {
    this.setState({ isLoading })
  }

  state = {
    planets: [],
    setPlanets: this.setPlanets,
    isLoading: false,
    setIsLoading: this.setIsLoading
  };

  render() {
    return (
      <SearchContext.Provider value={this.state}>
        <div className="top">
          <SearchForm />
          <ErrorButton />
        </div>
        <div className="bottom">
          <SearchList />
        </div>
      </SearchContext.Provider>
    );
  }
}
