import { ChangeEvent, FormEvent, useContext, useEffect } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import { SEARCH_KEY } from '@constants/index';
import './index.css';
import { useLocalStorage } from '@hooks/useLocalStorage';
import { fetchPlanets } from '@utils/fetchPlanets';
import SearchContext from '@store/searchContext';
import { Form, useLoaderData, useSearchParams } from 'react-router-dom';

export const SearchForm = () => {
  const { searchValue } = useLoaderData()
  console.log(searchValue)
  const { setIsLoading, setPlanets } = useContext(SearchContext);
  // const loadPlanets = useFetchAndSet({ setIsLoading, setItems: setPlanets, fetchFunc: fetchPlanets });
  const [savedSearchValue, saveSearchValue] = useLocalStorage<string>(
    SEARCH_KEY,
    ''
  );

  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    saveSearchValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const formattedSearch = savedSearchValue.trim();

    // setSearchParams({ ...searchParams, search: formattedSearch });

    // setIsLoading(true);
    // fetchPlanets({ searchValue: formattedSearch })
    //   .then((response) => {
    //     setIsLoading(false);
    //     setPlanets(response.results);
    //   })
    //   .catch(() => setIsLoading(false));
  };

  return (
    <Form method="post" className='form'>
      <Input placeholder="Search..." name="search" defaultValue={searchValue} />
      <Button>Search!</Button>
    </Form>
  );
};
