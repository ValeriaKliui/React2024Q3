import { SEARCH_KEY } from "@constants/index";
import { useCallback, useEffect, useRef } from "react";
import { useBeforeUnload, useSearchParams } from "react-router-dom";

export const useLocalStorage = <T>(key: string, initialValue?: T) => {
  const getInitialValue = () => {
    const savedValue = localStorage.getItem(key);
    if (savedValue) return JSON.parse(savedValue);
    return initialValue ?? "";
  };

  const valueRef = useRef(getInitialValue());
  const setValue = useCallback((value: T) => (valueRef.current = value), []);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(valueRef.current));
  }, [key]);

  useBeforeUnload(
    useCallback(() => {
      console.log(valueRef.current);
      localStorage.setItem(key, JSON.stringify(valueRef.current));
    }, [key])
  );

  useEffect(() => {
    if (valueRef.current) {
      setSearchParams(searchParams);
      searchParams.set(SEARCH_KEY, valueRef.current);
    }
  }, [searchParams, setSearchParams]);

  return [valueRef.current, setValue];
};
