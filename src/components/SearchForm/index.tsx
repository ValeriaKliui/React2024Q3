import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { getSavedValueByKey } from "@utils/getSavedValue";
import { SEARCH_KEY } from "@constants/index";
import "./index.css";
import { usePlanets } from "@hooks/usePlanets";

export const SearchForm = () => {
  const [searchValue, setSearchValue] = useState(() =>
    getSavedValueByKey(SEARCH_KEY)
  );
  const loadPlanets = usePlanets();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const formattedSearch = searchValue.trim();

    if (formattedSearch) {
      localStorage.setItem("search", formattedSearch);
    }
    loadPlanets({ searchValue: formattedSearch });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <Input
        placeholder="Search..."
        value={searchValue}
        onChange={handleChange}
      />
      <Button>Search!</Button>
    </form>
  );
};
