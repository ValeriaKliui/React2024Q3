import { describe, it, vi } from "vitest";
import { renderWithRouter, setup } from "../utils";
import { SearchForm } from "@components/SearchForm";
import { screen } from "@testing-library/react";

const searchedValue = "PlanET";
const mockSetItem = vi.spyOn(Storage.prototype, "setItem");

describe("searchForm", () => {
  it("clicking the Search button saves the entered value to the local storage", async () => {
    const { user, getByLabelText, getByRole } = setup(<SearchForm />);

    const input = getByLabelText("search");
    const button = getByRole("button");

    await user.type(input, searchedValue);
    await user.click(button);
    expect(mockSetItem).toHaveBeenCalledTimes(1);
  });
  it("component retrieves the value from the local storage upon mounting", () => {
    renderWithRouter(<SearchForm />);

    expect(screen.getByLabelText("search")).toHaveValue(searchedValue);
  });
});
