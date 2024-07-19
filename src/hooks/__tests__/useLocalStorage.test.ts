// import { expect, it, describe, afterEach } from "vitest";
// import { act, renderHook } from "@testing-library/react";
// import { useLocalStorage } from "@hooks/useLocalStorage";

it("", () => {});
// describe("useLocalStorage", () => {
//   const key = "bitter moon";
//   const initialValue = "is a good film";
//   const value = "is a BAD film";

//   const mockUsedLocation = jest.fn();
//   jest.mock("react-router-dom", () => ({
//     ...jest.requireActual("react-router-dom"),
//     useLocation: () => mockUsedLocation,
//   }));

//   afterEach(() => localStorage.clear());

//   it("should return a default value", () => {
//     const { result } = renderHook(() => useLocalStorage(key, initialValue));

//     const [savedValue] = result.current;
//     expect(savedValue).toEqual(initialValue);
//   });

//   it("should save to local storage", () => {
//     const { result } = renderHook(() => useLocalStorage(key, initialValue));

//     const [savedValue, saveValue] = result.current;
//     expect(savedValue).toEqual(initialValue);
//     act(() => {
//       saveValue(value);
//     });
//     expect(result.current[0]).toEqual(value);
//   });

//   it("should work with null/undefined values", () => {
//     const { result } = renderHook(() => useLocalStorage(key, null));

//     const [savedValue, saveValue] = result.current;
//     expect(savedValue).toEqual("");
//     act(() => {
//       saveValue(null);
//     });
//     expect(result.current[0]).toEqual("");

//     act(() => {
//       saveValue(undefined);
//     });
//     expect(result.current[0]).toEqual("");
//   });
// });
