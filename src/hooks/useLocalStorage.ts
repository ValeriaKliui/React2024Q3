import { useEffect, useState } from 'react';

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const getInitialValue = () => {
    const savedValue = localStorage.getItem(key);
    if (savedValue) return JSON.parse(savedValue);
    return initialValue;
  };

  const [value, setValue] = useState(getInitialValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
    return () => localStorage.removeItem(key);
  }, [key, value]);

  return [value, setValue];
};
