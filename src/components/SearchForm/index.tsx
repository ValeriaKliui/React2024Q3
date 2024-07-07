import { ChangeEvent, Component, FormEvent, ReactNode } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { SearchFormState } from "./interfaces";
import { getSavedValueByKey } from "@utils/getSavedValue";
import { SEARCH_KEY } from "@constants/index";

export class SearchForm extends Component<_, SearchFormState> {
  state = { searchValue: getSavedValueByKey(SEARCH_KEY) };

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchValue: event.target.value });
  };

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (this.state.searchValue)
      localStorage.setItem("search", this.state.searchValue);
  };

  render(): ReactNode {
    const { handleSubmit, handleChange } = this;

    return (
      <form onSubmit={handleSubmit}>
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
