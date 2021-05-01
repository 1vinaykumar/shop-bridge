import { CssBaseline } from "@material-ui/core";
import ApplicationRoutes from "./routes";
import store from "./state/store";
import reducer from "./state/reducer";
import { useReducer } from "react";
import { SnackbarProvider } from "notistack";

function App() {
  const reducerValue = useReducer(reducer);
  return (
    <store.Provider value={reducerValue}>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <CssBaseline />
        <ApplicationRoutes />
      </SnackbarProvider>
    </store.Provider>
  );
}

export default App;
