import { expect, it, describe } from 'vitest';
import { act, renderHook } from '@testing-library/react-hooks';
import { useLocalStorage } from '@hooks/useLocalStorage';
import { afterEach } from 'node:test';

describe('useLocalStorage', () => {
  const key = 'bitter moon';
  const initialValue = 'is a good film';
  const value = 'is a BAD film';
  afterEach(() => localStorage.clear(key));

  it('should return a default value', () => {
    const { result } = renderHook(() =>
      useLocalStorage(key, initialValue)
    );

    const [savedValue] = result.current;
    expect(savedValue).toEqual(initialValue);
  });

  it('should save to local storage', () => {
    const { result } = renderHook(() =>
      useLocalStorage(key, initialValue)
    );

    const [savedValue, saveValue] = result.current;
    expect(savedValue).toEqual(initialValue);
    act(() => {
      saveValue(value);
    });
    expect(result.current[0]).toEqual(value);
  });

  it('should work with bad values', () => {
    const { result } = renderHook(() => useLocalStorage(key, null));

    const [savedValue, saveValue] = result.current;
    expect(savedValue).toEqual(null);
    act(() => {
      saveValue('');
    });
    expect(result.current[0]).toEqual('');
  });
});
