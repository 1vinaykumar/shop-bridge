import {
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import store from "../../state/store";
import { useHistory, useParams } from "react-router";
import useGetProducts from "../custom-hooks/useGetProducts";
import { CircularProgress, Grid } from "@material-ui/core";
import { viewProduct } from "./styles";
import useDeleteProduct from "../custom-hooks/useDeleteProduct";

function ViewProduct() {
  const classes = viewProduct();
  const [state, dispatch] = useContext(store);
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const getAllProducts = useGetProducts();
  const history = useHistory();
  const deleteProduct = useDeleteProduct();

  useEffect(() => {
    if (!state?.products || state?.products.length === 0) {
      getAllProducts();
    }
  }, []);

  useEffect(() => {
    setProduct(
      state?.products.find(
        (item) => item.id.toString() === productId.toString()
      )
    );
  }, [state]);

  if (!product) {
    return (
      <Grid container justify="center">
        <CircularProgress />
      </Grid>
    );
  }
  return (
    <Grid container justify="center">
      <Grid item xs={10}>
        <Typography variant="h4" align="center" className={classes.title}>
          Product Details
        </Typography>
      </Grid>
      <Grid item xs={10} md={8} lg={4}>
        <List>
          <ListItem button>
            <ListItemText
              className={classes.listItemSecondary}
              secondary="Name"
            />
            <ListItemText
              className={classes.listItemPrimary}
              primary={product.name}
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              className={classes.listItemSecondary}
              secondary="Description"
            />
            <ListItemText
              className={classes.listItemPrimary}
              primary={product.description}
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              className={classes.listItemSecondary}
              secondary="Price"
            />
            <ListItemText
              className={classes.listItemPrimary}
              primary={product.price}
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              className={classes.listItemSecondary}
              secondary="Quantity"
            />
            <ListItemText
              className={classes.listItemPrimary}
              primary={product.quantity}
            />
          </ListItem>
          <ListItem button>
            <ListItemText
              className={classes.listItemSecondary}
              secondary="Discount"
            />
            <ListItemText
              className={classes.listItemPrimary}
              primary={product.discount}
            />
          </ListItem>
          <ListItem>
            <Button
              className={classes.btnEdit}
              variant="outlined"
              onClick={() => history.push("/products/edit/" + product.id)}
            >
              Edit
            </Button>
          </ListItem>
          <ListItem>
            <Button
              className={classes.btnDelete}
              variant="outlined"
              onClick={() => deleteProduct()}
            >
              Delete
            </Button>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
}

export default ViewProduct;
