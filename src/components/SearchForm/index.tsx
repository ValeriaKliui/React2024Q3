import { ChangeEvent, FormEvent, useContext } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { SEARCH_KEY } from "@constants/index";
import "./index.css";
import { useFetchAndSet } from "@hooks/useFetchAndSet";
import { useLocalStorage } from "@hooks/useLocalStorage";
import { fetchPlanets } from "@utils/fetchPlanets";
import SearchContext from "@store/searchContext";

export const SearchForm = () => {
  const { setIsLoading, setPlanets } = useContext(SearchContext);
  const loadPlanets = useFetchAndSet({ setIsLoading, setItems: setPlanets, fetchFunc: fetchPlanets });
  const [savedSearchValue, saveSearchValue] = useLocalStorage<string>(
    SEARCH_KEY,
    "",
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    saveSearchValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const formattedSearch = savedSearchValue.trim();
    loadPlanets({ searchValue: formattedSearch });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <Input
        placeholder="Search..."
        value={savedSearchValue}
        onChange={handleChange}
      />
      <Button>Search!</Button>
    </form>
  );
};
