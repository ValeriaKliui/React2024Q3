import { act, screen } from "@testing-library/react";
import { DetailedCard } from ".";
import { render } from "../../__tests__/utils";
import { vi } from "vitest";
import { INIT_TEST_STATE } from "../../__tests__/mocks";
import { getDiameter } from "@utils/getDiameter";

export const fetchResponseOk = <T,>(body: T) => ({
  ok: true,
  json: () => Promise.resolve(body),
});
const planet = INIT_TEST_STATE.planetsInfo.results[0];

describe("detailedCard", () => {
  it("loading indicator is displayed while fetching data", async () => {
    await act(() => render(<DetailedCard />));

    expect(screen.getByTestId("detail_loader")).toBeInTheDocument();
  });
  it("detailed card component correctly displays the detailed card data", async () => {
    vi.spyOn(global, "fetch").mockResolvedValue(
      fetchResponseOk(INIT_TEST_STATE.planetsInfo)
    );

    await act(() => render(<DetailedCard />));

    expect(screen.getByText(planet.name)).toBeInTheDocument();
    expect(screen.getByText(getDiameter(planet.diameter))).toBeInTheDocument();
  });
});
