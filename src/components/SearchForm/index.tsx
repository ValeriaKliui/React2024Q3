import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { SEARCH_KEY } from "@constants/index";
import "./index.css";
import { useLocalStorage } from "@hooks/useLocalStorage";
import { useSearchParams } from "react-router-dom";

export const SearchForm = () => {
  const [savedSearchValue, saveSearchValue] = useLocalStorage<string>(
    SEARCH_KEY,
    ""
  );

  const valueRef = useRef();

  const [searchParams, setSearchParams] = useSearchParams();

  const [searchValue, setSearchValue] = useState(() => {
    valueRef.current = savedSearchValue;
    return savedSearchValue || "";
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    saveSearchValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const formattedSearch = savedSearchValue.trim();
    setSearchParams({ ...searchParams, search: formattedSearch });
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
