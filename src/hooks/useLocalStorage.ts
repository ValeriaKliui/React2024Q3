import { SEARCH_KEY } from "@constants/index";
import { useCallback, useEffect, useRef, useState } from "react";
import { useBeforeUnload, useSearchParams } from "react-router-dom";

export const useLocalStorage = <T>(key: string, initialValue?: T) => {
  const getInitialValue = () => {
    const savedValue = localStorage.getItem(key);
    if (savedValue) return JSON.parse(savedValue);
    return initialValue ?? "";
  };

  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(getInitialValue);

  const valueRef = useRef();

  useEffect(() => {
    valueRef.current = value;
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  useBeforeUnload(
    useCallback(() => {
      localStorage.setItem(key, JSON.stringify(valueRef.current));
    }, [key])
  );

  useEffect(() => {
    valueRef.current &&
      setSearchParams({ ...searchParams, search: valueRef.current });

    if (!valueRef.current) {
      searchParams.delete(SEARCH_KEY);
      setSearchParams(searchParams);
    }
  }, [setSearchParams, searchParams]);

  return [value, setValue];
};
