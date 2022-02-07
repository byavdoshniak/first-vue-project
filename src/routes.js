import Home from "./components/Home";
import Products from "./components/Products";
import AddProduct from "./components/AddProduct";
import ProductDetails from "./components/ProductDetails";

export const routes = [
  { path: "/", component: Home },
  { path: "/products", component: Products },
  { path: "/add-product", component: AddProduct },
  {
    path: "/products/:id",
    name: "productDetails",
    component: ProductDetails,
    props: true
  }
];
