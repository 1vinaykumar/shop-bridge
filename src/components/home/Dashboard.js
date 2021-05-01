import { Grid, Typography, Link, Container } from "@material-ui/core";
import { useContext, useEffect } from "react";
import { Link as RouteLink } from "react-router-dom";

import TabDetails from "./TabDetails";
import store from "../../state/store";
import useGetProducts from "../custom-hooks/useGetProducts";

export default function Dashboard() {
  const [state, dispatch] = useContext(store);
  const getAllProducts = useGetProducts();

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Container>
      <Typography variant="h4" align="center">
        Products
      </Typography>
      <Grid container justify="center">
        {state?.products.map((product) => (
          <TabDetails key={product.id} item={product} />
        ))}

        <Grid container justify="center">
          <Link component={RouteLink} to="/products/add">
            Add Product
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}
