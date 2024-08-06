import { describe, expect, it, vi } from "vitest";
import { Header } from "@components/Header";
import { setup } from "../utils";
import Providers from "@pages/providers";

vi.mock("next/router", () => ({
  useRouter() {
    return {
      pathname: "/mock-path",
      query: { mockKey: "mockValue" },
      push: vi.fn(),
    };
  },
}));

describe("theme", () => {
  it("button on top of the application for theme selection should change text form 'dark' to 'light' on click", async () => {
    const { getByRole, user } = setup(
      <Providers>
        <Header />
      </Providers>,
    );

    const button = getByRole("button", { name: /theme/i });

    expect(button).toHaveTextContent(/dark/i);
    await user.click(button);
    expect(button).toHaveTextContent(/light/i);
  });
});
