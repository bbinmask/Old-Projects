import { useContext } from "react";
import { Link } from "react-router-dom";
import { ItemsContext } from "../store/items-store";
import { useDispatch, useSelector } from "react-redux";
import { addNewItem, removeItem } from "../store/CartSlice";

const Product = ({ product, handleCurrency }) => {
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const { items, setItems } = useContext(ItemsContext);
  const handleItem = (product) => {
    setItems(product);
  };
  const elementFound = cart.indexOf(product) >= 0;

  let discount = Math.round(product.discountPercentage * product.price);
  let totalPrice = Math.floor(product.price * 100 - discount);
  const handleAddToCart = () => {
    dispatch(addNewItem(product));
  };
  const handleRemove = () => {
    dispatch(removeItem(product.id));
  };

  return (
    <div className="product">
      <div className="div-div">
        <Link onClick={() => handleItem(product)} to="/product/items">
          <img
            src={product.images[0]}
            alt="Product"
            className="product__image"
          />
        </Link>
        <div className="tags-div">
          <span className="badge tags text-bg-success">
            {product.rating} ⭐
          </span>
          <span className="badge tags text-bg-warning">{product.brand}</span>
          <span className="badge tags text-bg-info">{product.category}</span>
        </div>
        <div className="product__info">
          <Link
            onClick={() => handleItem(product)}
            to="/product/items"
            className="product__title on__hover td-none"
          >
            {product.title}
          </Link>
          <p className="product__description">({product.description})</p>
          <div className="price-div">
            {" "}
            <span className="product__price">
              {handleCurrency(product.price * 100)}
            </span>
            <span className="product__total__price">
              {handleCurrency(totalPrice)}
            </span>
            <span className="product__discount">
              {product.discountPercentage}% off
            </span>
          </div>
        </div>
      </div>
      <div className="btn__div">
        {!elementFound ? (
          <button onClick={handleAddToCart} className="product__add__button">
            ADD TO CART
          </button>
        ) : (
          <button onClick={handleRemove} className="product__remove__button">
            REMOVE
          </button>
        )}

        <button
          onClick={() => alert("Added to FAVOURITE🤍")}
          className="wishlist__button"
        >
          FAVOURITE🤍
        </button>
      </div>
    </div>
  );
};

export default Product;
