import {
  ChangeEvent,
  Component,
  ContextType,
  FormEvent,
  ReactNode,
} from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import { SearchFormState } from './interfaces';
import { getSavedValueByKey } from '@utils/getSavedValue';
import { SEARCH_KEY } from '@constants/index';
import { fetchPlanets } from '@utils/fetchPlanets';
import SearchContext from '@store/searchContext';
import './index.css'

export class SearchForm extends Component<_, SearchFormState> {
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
    const { searchValue } = this.state;
    const formattedSearch = searchValue.trim();

    if (formattedSearch) {
      localStorage.setItem('search', formattedSearch);
    }
    this.changeLoadingStatus(true);
    fetchPlanets({ searchValue: formattedSearch }).then(
      (response) => {
        this.changeLoadingStatus(false);
        this.context.setPlanets(response.results);
      }
    ).catch(() => this.changeLoadingStatus(false));
  };

  render(): ReactNode {
    const { handleSubmit, handleChange } = this;

    return (
      <form onSubmit={handleSubmit} className='form'>
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
