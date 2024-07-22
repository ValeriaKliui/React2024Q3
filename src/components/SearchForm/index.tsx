import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { SEARCH_KEY } from "@constants/index";
import { useLocalStorage } from "@hooks/useLocalStorage";
import { useSearchParams } from "react-router-dom";
import { Form } from "./styled";

export const SearchForm = () => {
  const [savedSearchValue, saveSearchValue] = useLocalStorage<string>(
    SEARCH_KEY,
    "",
  );

  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(savedSearchValue || "");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    saveSearchValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const formattedSearch = searchValue.trim();
    setSearchParams((prevParams) => ({
      ...prevParams,
      page: "1",
      search: formattedSearch,
    }));
  };

  useEffect(() => {
    const initURLPage = searchParams.get(SEARCH_KEY);
    if (initURLPage) {
      setSearchValue(initURLPage);
      saveSearchValue(initURLPage);
    }
  }, [searchParams, saveSearchValue]);

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Search..."
        value={searchValue}
        onChange={handleChange}
        aria-label="search"
      />
      <Button>Search!</Button>
    </Form>
  );
};
