import React from "react";
import "./ProductList.css";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { handleCurrency } from "../store/handleCurrency";
function ProductList() {
  const product = useSelector((store) => store.product);

  return (
    <center>
      <div className="product__list">
        {product.map((product) => {
          return (
            <Product
              key={product.id}
              product={product}
              handleCurrency={handleCurrency}
            ></Product>
          );
        })}

        {/* Add more product cards here */}
      </div>
    </center>
  );
}

export default ProductList;
