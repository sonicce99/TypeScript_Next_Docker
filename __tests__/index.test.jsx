import { render, screen } from "@testing-library/react";
import Index from "../pages/index";

describe("App", () => {
  test("메뉴가 렌더링 되어야 한다.", () => {
    render(<Index />);

    const menu = screen.getByRole("navigation", {
      name: "fastcampus",
    });

    expect(menu).toBeInTheDocument();
  });

  test("배너가 렌더링 되어야 한다.", () => {
    render(<Index />);

    const banner = screen.getByRole("banner", {
      name: "",
    });

    expect(banner).toBeInTheDocument();
  });
});
