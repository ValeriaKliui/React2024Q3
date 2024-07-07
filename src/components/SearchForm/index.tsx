import {
  ChangeEvent,
  Component,
  ContextType,
  FormEvent,
  ReactNode,
} from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { SearchFormState } from "./interfaces";
import { getSavedValueByKey } from "@utils/getSavedValue";
import { SEARCH_KEY } from "@constants/index";
import SearchContext from "@store/searchContext";
import "./index.css";
import { loadPlanets } from "@utils/loadPlanets";

export class SearchForm extends Component<SearchFormState> {
  state = { searchValue: getSavedValueByKey(SEARCH_KEY) };
  static contextType = SearchContext;
  declare context: ContextType<typeof SearchContext>;

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchValue: event.target.value });
  };

  changeLoadingStatus = (isLoading: boolean) => {
    this.context.setIsLoading(isLoading);
  };

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const formattedSearch = this.state.searchValue.trim();

    if (formattedSearch) {
      localStorage.setItem("search", formattedSearch);
    }
    loadPlanets(this)(formattedSearch);
  };

  render(): ReactNode {
    const { handleSubmit, handleChange } = this;

    return (
      <form onSubmit={handleSubmit} className="form">
        <Input
          placeholder="Search..."
          value={this.state.searchValue}
          onChange={handleChange}
        />
        <Button>Search!</Button>
      </form>
    );
  }
}
