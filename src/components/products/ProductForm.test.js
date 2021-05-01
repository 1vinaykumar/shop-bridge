import { render, screen } from "@testing-library/react";
import ProductForm from "./ProductForm";

import userEvent from "@testing-library/user-event";

describe("Testing ProductForm Component", () => {
  it("should render Title text", () => {
    render(<ProductForm title={"Some Title"} />);
    expect(screen.getByText(/Some Title/i)).toBeInTheDocument();
    expect(screen.getByText(/Submit/i)).toBeInTheDocument();
  });

  it("should not render submit text if loading is true", () => {
    render(<ProductForm title={"Some Title"} loading />);
    expect(screen.getByTestId("submit-button")).not.toHaveTextContent(
      /Submit/i
    );
  });

  it("should render all the fields", () => {
    render(<ProductForm title={"Some Title"} loading />);
    expect(screen.getAllByText(/Name/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Description/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Price/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Quantity/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Discount/).length).toBeGreaterThan(0);
  });
});
