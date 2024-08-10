import { renderWithProviders } from "../utils";
import { INIT_TEST_STATE } from "../mocks";
import { DetailedCard } from "@components/DetailedCard";

const planet = INIT_TEST_STATE.results[0];

describe("detailedCard", () => {
  it("loading indicator is displayed while fetching data", async () => {
    const { getByTestId } = renderWithProviders(<DetailedCard />);

    expect(getByTestId("detail_loader")).toBeInTheDocument();
  });

  it("detailed card component correctly displays the detailed card data", async () => {
    const { findByText } = renderWithProviders(<DetailedCard />);

    expect(await findByText(planet.name)).toBeInTheDocument();
    expect(await findByText(planet.climate)).toBeInTheDocument();
  });
});
