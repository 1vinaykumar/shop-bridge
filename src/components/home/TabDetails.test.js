import { render, screen } from "@testing-library/react";
import TabDetails from "./TabDetails";

import { MemoryRouter } from "react-router";
import store from "../../state/store";
import { SnackbarProvider } from "notistack";
import userEvent from "@testing-library/user-event";

describe("Testing TabDetails Component", () => {
  it("should render Realme Text", () => {
    render(
      <store.Provider value={[null, () => {}]}>
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <MemoryRouter>
            <TabDetails item={{ name: "Realme", price: 10000 }} />
          </MemoryRouter>
        </SnackbarProvider>
      </store.Provider>
    );

    expect(screen.getByText(/Realme/i)).toBeInTheDocument();
    expect(screen.getByText(/10000/i)).toBeInTheDocument();
  });

  it("Should render delete dialogue on buttonclick", () => {
    render(
      <store.Provider value={[null, () => {}]}>
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <MemoryRouter>
            <TabDetails item={{ name: "Realme", price: 10000 }} />
          </MemoryRouter>
        </SnackbarProvider>
      </store.Provider>
    );

    const deleteButton = screen.getByText(/Delete/);

    userEvent.click(deleteButton);

    expect(
      screen.getByText(/Are you sure to delete the product ?/)
    ).toBeInTheDocument();
  });
});
