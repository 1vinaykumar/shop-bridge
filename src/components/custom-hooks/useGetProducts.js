import axios from "axios";
import { useSnackbar } from "notistack";
import { useContext } from "react";
import action, { apiURL } from "../../state/actions";
import {
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_LOADING,
  GET_ALL_PRODUCTS_ERROR,
} from "../../state/actionTypes";
import store from "../../state/store";

function useGetProducts() {
  const [state, dispatch] = useContext(store);
  const { enqueueSnackbar } = useSnackbar();

  return () => {
    dispatch(action(GET_ALL_PRODUCTS_LOADING));
    axios
      .get(apiURL + "products")
      .then(({ data: products }) => {
        dispatch(action(GET_ALL_PRODUCTS_SUCCESS, { products }));
      })
      .catch((error) => {
        enqueueSnackbar(error.message, {
          variant: "error",
        });
        enqueueSnackbar("Unable to fetch products", {
          variant: "error",
        });
        dispatch(action(GET_ALL_PRODUCTS_ERROR, { error }));
      });
  };
}

export default useGetProducts;
