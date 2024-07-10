import { it, describe, vi, beforeAll } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useFetchAndSet } from '@hooks/useFetchAndSet';

describe('usePlanets', () => {
  const fetchSpy = vi.spyOn(global, 'fetch');
  beforeAll(() => {
    const mockResolveValue = {
      ok: true,
      json: () =>
        new Promise((resolve) =>
          resolve({
            results: [{ name: 'Planet' }],
          })
        ),
    };

    fetchSpy.mockReturnValue(mockResolveValue);
  });

  it('should fetch movies', async () => {
    const { result } = renderHook(() => useFetchAndSet());

    const loadPlanets = result.current;
    loadPlanets({ searchValue: 'test' });
  });
});
