import { useContext, useEffect, useState } from "react";
import store from "../../state/store";
import ProductForm from "./ProductForm";
import {
  RESET_EDIT_PRODUCT_STATUS,
  UPDATE_PRODUCT_ERROR,
  UPDATE_PRODUCT_LOADING,
  UPDATE_PRODUCT_SUCCESS,
} from "../../state/actionTypes";
import action, { apiURL } from "../../state/actions";
import axios from "axios";
import { useHistory, useParams } from "react-router";
import useGetProducts from "../custom-hooks/useGetProducts";
import { CircularProgress, Grid } from "@material-ui/core";
import { useSnackbar } from "notistack";

function EditProduct() {
  const [state, dispatch] = useContext(store);
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const getAllProducts = useGetProducts();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (!state?.products || state?.products.length === 0) {
      getAllProducts();
    }
    return () => dispatch(action(RESET_EDIT_PRODUCT_STATUS));
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
    <ProductForm
      defaultValues={product}
      title="Edit Product"
      loading={state?.editProduct?.loading}
      onSubmit={(product) => {
        dispatch(action(UPDATE_PRODUCT_LOADING));
        axios
          .put(apiURL + "products/" + productId, product)
          .then(({ data }) => {
            dispatch(action(UPDATE_PRODUCT_SUCCESS));
            enqueueSnackbar("Edit Product Successful", { variant: "success" });
            getAllProducts();
            history.push("/");
          })
          .catch((error) => {
            enqueueSnackbar(error.message, {
              variant: "error",
            });
            enqueueSnackbar("Edit Product Unsuccessful", {
              variant: "error",
            });
            dispatch(action(UPDATE_PRODUCT_ERROR, { error }));
          });
      }}
    />
  );
}

export default EditProduct;
