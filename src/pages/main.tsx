import { SearchForm } from "@components/SearchForm";
import { SearchList } from "@components/SearchList";
import SearchContext from "@store/searchContext";
import { Component } from "react";

export class MainPage extends Component {
  setPlanets = (planets) => {
    this.setState({ planets });
  };

  state = {
    planets: [],
    setPlanets: this.setPlanets,
  };

  render() {
    return (
      <SearchContext.Provider value={this.state}>
        <SearchForm />
        <SearchList />
      </SearchContext.Provider>
    );
  }
}
