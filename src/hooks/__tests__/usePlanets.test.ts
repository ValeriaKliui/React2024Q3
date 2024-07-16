import { expect, it, describe, afterEach } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { useLocalStorage } from "@hooks/useLocalStorage";

it("", () => {});
// import { it, describe, vi, beforeAll } from "vitest";
// import { renderHook } from "@testing-library/react";

// describe("usePlanets", () => {
//   const fetchSpy = vi.spyOn(global, "fetch");
//   beforeAll(() => {
//     const mockResolveValue = {
//       ok: true,
//       json: () =>
//         new Promise((resolve) =>
//           resolve({
//             results: [{ name: "Planet" }],
//           })
//         ),
//     };

//     fetchSpy.mockReturnValue(mockResolveValue);
//   });

//   it("should fetch movies", async () => {
//     const { result } = renderHook(() => useFetchAndSet());

//     const loadPlanets = result.current;
//     loadPlanets({ searchValue: "test" });
//   });
// });
