import { lazy } from "react";

const Dashboard = lazy(() => import("../components/home/Dashboard"));
const AddProduct = lazy(() => import("../components/products/AddProduct"));
const EditProduct = lazy(() => import("../components/products/EditProduct"));
const ViewProduct = lazy(() => import("../components/products/ViewProduct"));

export default [
  {
    id: "home",
    path: "/",
    component: Dashboard,
    isPrivate: false,
  },
  {
    id: "addProduct",
    path: "/products/add",
    component: AddProduct,
    isPrivate: false,
  },
  {
    id: "editProduct",
    path: "/products/edit/:productId",
    component: EditProduct,
    isPrivate: false,
  },
  {
    id: "viewProduct",
    path: "/products/view/:productId",
    component: ViewProduct,
    isPrivate: false,
  },
];
