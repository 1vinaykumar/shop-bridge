import * as types from "./actionTypes";
import { initialState, commonActionState } from "./store";

const loadingState = {
  ...commonActionState,
  loading: true,
};

const successState = {
  ...commonActionState,
  success: true,
};

const errorState = {
  ...commonActionState,
  failed: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.RESET_ADD_PRODUCT_STATUS:
      return {
        ...state,
        addProduct: commonActionState,
      };

    case types.RESET_DELETE_PRODUCT_STATUS:
      return {
        ...state,
        deleteProduct: commonActionState,
      };

    case types.RESET_EDIT_PRODUCT_STATUS:
      return {
        ...state,
        editProduct: commonActionState,
      };

    case types.GET_ALL_PRODUCTS_LOADING:
      return {
        ...state,
        getAllProducts: loadingState,
      };

    case types.GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        getAllProducts: successState,
        products: action.payload.products,
      };

    case types.GET_ALL_PRODUCTS_ERROR:
      return {
        ...state,
        getAllProducts: { ...errorState, error: action.payload.error },
      };

    case types.ADD_PRODUCT_LOADING:
      return {
        ...state,
        addProduct: loadingState,
      };

    case types.ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        addProduct: successState,
      };

    case types.ADD_PRODUCT_ERROR:
      return {
        ...state,
        addProduct: { ...errorState, error: action.payload.error },
      };

    case types.UPDATE_PRODUCT_LOADING:
      return {
        ...state,
        editProduct: loadingState,
      };

    case types.UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        editProduct: successState,
      };

    case types.UPDATE_PRODUCT_ERROR:
      return {
        ...state,
        editProduct: { ...errorState, error: action.payload.error },
      };

    case types.DELETE_PRODUCT_LOADING:
      return {
        ...state,
        deleteProduct: loadingState,
      };

    case types.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        deleteProduct: successState,
      };

    case types.DELETE_PRODUCT_ERROR:
      return {
        ...state,
        deleteProduct: { ...errorState, error: action.payload.error },
      };
  }
};
