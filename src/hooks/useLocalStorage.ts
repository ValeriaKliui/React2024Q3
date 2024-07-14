import { getUrlFromParams } from '@components/PlanetsList/getUrlFromParams';
import { SEARCH_KEY } from '@constants/index';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useBeforeUnload, useSearchParams } from 'react-router-dom';

export const useLocalStorage = <T>(key: string, initialValue?: T) => {
  const getInitialValue = () => {
    const savedValue = localStorage.getItem(key);
    if (savedValue) return JSON.parse(savedValue);
    return initialValue ?? '';
  };

  const valueRef = useRef(getInitialValue());
  const setValue = (value: T) => (valueRef.current = value);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(valueRef.current));
  }, [key]);

  useBeforeUnload(
    useCallback(() => {
      localStorage.setItem(key, JSON.stringify(valueRef.current));
    }, [key])
  );

  useEffect(() => {
    setSearchParams({ ...searchParams, search: valueRef.current });
  }, []);

  return [valueRef.current, setValue];
};
