import { ChangeEvent, FormEvent } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { SEARCH_KEY } from "@constants/index";
import "./index.css";
import { usePlanets } from "@hooks/usePlanets";
import { useLocalStorage } from "@hooks/useLocalStorage";

export const SearchForm = () => {
  const loadPlanets = usePlanets();
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
