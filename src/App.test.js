import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Testing App Component", () => {
  it("should render Shop Bridge title", () => {
    render(<App />);
    const titleElement = screen.getByText(/Shop Bridge/i);
    expect(titleElement).toBeInTheDocument();
  });
});
