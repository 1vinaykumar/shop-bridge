import { render, screen } from "@testing-library/react";
import Dashboard from "./Dashboard";

import { MemoryRouter } from "react-router";
import store from "../../state/store";
import { SnackbarProvider } from "notistack";

describe("Testing Dashboard Component", () => {
  it("should render Add Product Link", () => {
    render(
      <store.Provider value={[null, () => {}]}>
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <MemoryRouter>
            <Dashboard />
          </MemoryRouter>
        </SnackbarProvider>
      </store.Provider>
    );

    expect(screen.getByText(/Add Product/i)).toBeInTheDocument();
    expect(screen.getByText(/Products/i)).toBeInTheDocument();
  });
});
