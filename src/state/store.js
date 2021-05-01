import { createContext } from "react";

export const commonActionState = {
  loading: false,
  success: false,
  failed: false,
  error: null,
};

export const initialState = {
  products: [],
  getAllProducts: commonActionState,
  getProduct: commonActionState,
  addtProduct: commonActionState,
  editProduct: commonActionState,
  deleteProduct: commonActionState,
};

export default createContext(initialState);
