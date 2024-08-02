import MainPage from "@pages/index";
import { vi } from "vitest";
import { renderWithProviders, setup } from "../utils";

const pagesAmount = 6;
const initPageUrl = `/?page=${pagesAmount}`;

vi.mock('next/router', () => ({
  useRouter() {
    return {
      pathname: '/mock-path',
      query: { mockKey: 'mockValue' },
      push: vi.fn(),
    };
  },
}));
vi.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null
    };
  },
  useParams() { return {} },
  usePathname() { return {} },
  useSearchParams() { return {} },
}));


describe("pagination", () => {
  beforeEach(() => {
    window.history.replaceState("", "", initPageUrl);
  });

  it(`should display ${pagesAmount} pages`, async () => {
    const { findAllByRole } = renderWithProviders(
      <>
        <a href={initPageUrl}>on {pagesAmount} page</a>
        <MainPage />
      </>,
    );
    const pages = await findAllByRole("generic", { name: /page/i });
    const lastPageIndex = pages.length - 1;
    const lastPage = pages[lastPageIndex];

    expect(pages.length).toEqual(pagesAmount);
    expect(lastPage.textContent).toEqual(String(pagesAmount));
  });

  it("should change URL after clicking on another page", async () => {
    const newPage = 2;

    const { user, findByRole } = setup(<MainPage />);

    await user.click(await findByRole("generic", { name: `${newPage} page` }));
    expect(window.location.href).toContain(`page=${newPage}`);
  });
});
