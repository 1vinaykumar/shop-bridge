import { render, screen } from "@testing-library/react";
import TopNavigationbar from "./TopNavigationbar";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";

describe("Testing TopNavigationbar Component", () => {
  it("should render Shop Bridge title", () => {
    render(<TopNavigationbar />);
    const titleElement = screen.getByText(/Shop Bridge/i);
    expect(titleElement).toBeInTheDocument();
  });

  it("Should render side drawer on button click", () => {
    render(
      <MemoryRouter>
        <TopNavigationbar />
      </MemoryRouter>
    );
    const button = screen.getByTestId("menu-button");
    userEvent.click(button);
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Add Product/i)).toBeInTheDocument();
  });
});
