import routeConfig from "./routeConfig";
import ErrorBoundary from "./ErrorBoundary";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Suspense } from "react";
import { CircularProgress, Grid } from "@material-ui/core";
import TopNavigationbar from "./TopNavigationbar";

export default function ApplicationRoutes({}) {
  return (
    <Router>
      <TopNavigationbar />
      <ErrorBoundary>
        <Suspense
          fallback={
            <Grid container justify="center" alignContent="center">
              <CircularProgress />
            </Grid>
          }
        >
          <Switch>
            {routeConfig.map((route) => (
              <Route
                key={route.id}
                exact
                path={route.path}
                component={route.component}
              />
            ))}
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}
