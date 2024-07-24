import { describe, expect, it } from "vitest";
import { Header } from "@components/Header";
import { setup } from "../utils";

describe("theme", () => {
  it("button on top of the application for theme selection should change text form 'dark' to 'light' on click", async () => {
    const { getByRole, user } = setup(<Header />);

    const button = getByRole("button", { name: /theme/i });

    expect(button).toHaveTextContent(/dark/i);
    await user.click(button);
    expect(button).toHaveTextContent(/light/i);
  });
});
