import axios from "axios";
import { useSnackbar } from "notistack";
import { useContext } from "react";
import { useHistory } from "react-router";
import action, { apiURL } from "../../state/actions";
import {
  DELETE_PRODUCT_ERROR,
  DELETE_PRODUCT_LOADING,
  DELETE_PRODUCT_SUCCESS,
} from "../../state/actionTypes";
import store from "../../state/store";
import useGetProducts from "./useGetProducts";

function useDeleteProduct(productId) {
  const [state, dispatch] = useContext(store);
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const getAllProducts = useGetProducts();

  return () => {
    dispatch(action(DELETE_PRODUCT_LOADING));
    axios
      .delete(apiURL + "products/" + productId)
      .then(() => {
        dispatch(action(DELETE_PRODUCT_SUCCESS));
        enqueueSnackbar("Delete product successful", {
          variant: "success",
        });
        getAllProducts();
        history.push("/");
      })
      .catch((error) => {
        enqueueSnackbar(error.message, {
          variant: "error",
        });
        enqueueSnackbar("Delete Product Unsuccessful", {
          variant: "error",
        });
        dispatch(action(DELETE_PRODUCT_ERROR, { error }));
      });
  };
}

export default useDeleteProduct;
