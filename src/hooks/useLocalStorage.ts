'use client';

import { PAGE_KEY, SEARCH_KEY } from '@constants/index';
import { useCallback, useEffect, useRef } from 'react';
import { useBeforeUnload } from 'react-router-dom';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';

export const useLocalStorage = <T>(key: string, initialValue?: T) => {
  const { replace, isReady } = useRouter();
  const pathname = usePathname();

  const getInitialValue = () => {
    if (typeof window !== 'undefined') {
      const savedValue = localStorage.getItem(key);
      if (savedValue) return JSON.parse(savedValue);
      return initialValue ?? '';
    }
  };

  const valueRef = useRef(getInitialValue());
  const setValue = useCallback(
    (value: T) => (valueRef.current = value),
    []
  );

  const searchParams = useSearchParams();

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(valueRef.current));
  }, [key]);

  useBeforeUnload(
    useCallback(() => {
      localStorage.setItem(key, JSON.stringify(valueRef.current));
    }, [key])
  );

  useEffect(() => {
    if (valueRef.current) {
      const params =
        searchParams && new URLSearchParams(searchParams);
      params?.set(SEARCH_KEY, valueRef.current);
      params?.set(PAGE_KEY, '1');
      isReady && replace(`${pathname}?${params?.toString()}`);
    }
  }, [searchParams?.size]);

  return [valueRef.current, setValue];
};
