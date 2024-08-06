"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { PAGE_KEY, SEARCH_KEY } from "@constants/index";
import { useLocalStorage } from "@hooks/useLocalStorage";
import { usePathname, useSearchParams } from "next/navigation";
import { Form } from "./styled";
import { useRouter } from "next/router";

export const SearchForm = () => {
  const [savedSearchValue, saveSearchValue] = useLocalStorage<string>(
    SEARCH_KEY,
    "",
  );

  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [searchValue, setSearchValue] = useState(savedSearchValue || "");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    saveSearchValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const formattedSearch = searchValue.trim();
    const params = searchParams && new URLSearchParams(searchParams);

    if (formattedSearch) {
      params?.set(PAGE_KEY, "1");
      params?.set(SEARCH_KEY, formattedSearch);
    } else params?.delete(SEARCH_KEY);

    replace(`${pathname}?${params?.toString()}`);
  };

  // useEffect(() => {
  //   const initURLPage = searchParams && searchParams.get(SEARCH_KEY);

  //   if (initURLPage) {
  //     setSearchValue(initURLPage);
  //     saveSearchValue(initURLPage);
  //   }
  // }, [searchParams, saveSearchValue]);

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
