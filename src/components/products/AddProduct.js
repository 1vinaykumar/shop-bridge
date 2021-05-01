import axios from "axios";
import { useSnackbar } from "notistack";
import { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import action, { apiURL } from "../../state/actions";
import {
  ADD_PRODUCT_ERROR,
  ADD_PRODUCT_LOADING,
  ADD_PRODUCT_SUCCESS,
  RESET_ADD_PRODUCT_STATUS,
} from "../../state/actionTypes";
import store from "../../state/store";
import useGetProducts from "../custom-hooks/useGetProducts";
import ProductForm from "./ProductForm";

function AddProduct() {
  const [state, dispatch] = useContext(store);
  const history = useHistory();
  const getAllProducts = useGetProducts();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => () => dispatch(action(RESET_ADD_PRODUCT_STATUS)), []);

  return (
    <ProductForm
      title="Add Product"
      loading={state?.addProduct?.loading}
      onSubmit={(product) => {
        dispatch(action(ADD_PRODUCT_LOADING));
        axios
          .post(apiURL + "products", product)
          .then(({ data }) => {
            dispatch(action(ADD_PRODUCT_SUCCESS));
            enqueueSnackbar("Add Product Successful", { variant: "success" });
            getAllProducts();
            history.push("/");
          })
          .catch((error) => {
            enqueueSnackbar(error.message, {
              variant: "error",
            });
            enqueueSnackbar("Add Product Unsuccessful", { variant: "error" });
            dispatch(action(ADD_PRODUCT_ERROR, { error }));
          });
      }}
    />
  );
}

export default AddProduct;
