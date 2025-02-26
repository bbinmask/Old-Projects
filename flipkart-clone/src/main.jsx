import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProductList from "./components/ProductList.jsx";
import Cart from "./components/Cart.jsx";
import App from "./routes/App.jsx";
import Account from "./components/Account.jsx";
import Items from "./components/Items.jsx";
import { Provider } from "react-redux";
import { flipkartStore } from "./store/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProductList />,
      },
      { path: "/cart", element: <Cart /> },
      { path: "/account", element: <Account /> },
      { path: "/product/items", element: <Items /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={flipkartStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
