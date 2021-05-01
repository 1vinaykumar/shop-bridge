import {
  Divider,
  Card,
  Typography,
  CardContent,
  CardActions,
  Button,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import action from "../../state/actions";
import { RESET_DELETE_PRODUCT_STATUS } from "../../state/actionTypes";
import store from "../../state/store";
import useDeleteProduct from "../custom-hooks/useDeleteProduct";
import { tabStyles } from "./styles";

function TabDetails({ item }) {
  const [state, dispatch] = useContext(store);
  const classes = tabStyles();
  const history = useHistory();
  const deleteProduct = useDeleteProduct(item.id);
  const [showDeleteConfirmation, setDeleteConfirmation] = useState(false);

  useEffect(() => () => dispatch(action(RESET_DELETE_PRODUCT_STATUS)), []);

  return (
    <>
      <Grid item xs={10} sm={5} md={3}>
        <Button
          fullWidth
          className={classes.tabButton}
          onClick={() => history.push("/products/view/" + item.id)}
        >
          <Card variant="outlined" className={classes.cardRoot}>
            <CardContent className={classes.cardContent}>
              <Typography variant="h5" className={classes.nameContainer}>
                {item.name}
              </Typography>
              <Typography
                variant="subtitle1"
                className={classes.priceContainer}
              >
                {item.price}
              </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
              <Button
                className={classes.btnEdit}
                variant="outlined"
                onClick={(event) => {
                  event.stopPropagation();
                  history.push("/products/edit/" + item.id);
                }}
              >
                Edit
              </Button>
              <Button
                className={classes.btnDelete}
                variant="outlined"
                onClick={(event) => {
                  event.stopPropagation();
                  setDeleteConfirmation(true);
                }}
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        </Button>
      </Grid>
      <Dialog
        open={showDeleteConfirmation}
        onClose={() => setDeleteConfirmation(false)}
      >
        <DialogTitle>Delete Confirmation</DialogTitle>
        <DialogContent>Are you sure to delete the product ?</DialogContent>
        <DialogActions>
          <Button
            className={classes.btnCancel}
            onClick={() => setDeleteConfirmation(false)}
          >
            Cancel
          </Button>
          <Button
            className={classes.btnDelete}
            onClick={() => {
              deleteProduct();
              setDeleteConfirmation(false);
            }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default TabDetails;
