import { useContext, useState } from "react";
import "./Items.css";
import { ItemsContext } from "../store/items-store";
import { useDispatch, useSelector } from "react-redux";
import { handleCurrency } from "../store/handleCurrency";
import { discountedPrice } from "../functions/discountedPrice";
const Items = () => {
  const { items, setItems } = useContext(ItemsContext);
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const [thumbnail, setThumbnail] = useState("");
  const handleImages = (image) => {
    setThumbnail(image);
  };
  const elementFound = cart.indexOf(items) >= 0;
  const handleAddToCart = (item) => {
    dispatch(addNewItem(item));
  };
  const handleRemove = () => {
    dispatch(removeItem(items.id));
  };
  return items !== undefined ? (
    <div className="">
      <div className="info__div">
        <div
          className="d-flex flex-column flex-shrink-0 bg-body-tertiary sidebar"
          style={{ width: "5.5rem" }}
        >
          <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
            <li className="nav-item">
              <a href="#" className="py-3 border-bottom rounded-0"></a>
            </li>
            <li>
              <a
                href="#"
                className="nav-link border-bottom rounded-0 sidebar__a"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                aria-label="Dashboard"
                data-bs-original-title="Dashboard"
              >
                {items.images.map((i) => (
                  <img
                    onClick={() => handleImages(i)}
                    key={i}
                    className=""
                    src={i}
                    style={{ width: "90px" }}
                  />
                ))}
              </a>
            </li>
          </ul>
        </div>
        <div className="thumbnail__div">
          <img
            src={thumbnail == "" ? items.thumbnail : thumbnail}
            className="img__thumbnail"
            alt="..."
          />
          <div className="btn__container">
            {!elementFound ? (
              <button
                onClick={() => handleAddToCart(items)}
                className="product__add__button items__add__button"
              >
                ADD TO CART
              </button>
            ) : (
              <button
                onClick={handleRemove}
                className="product__remove__button items__remove__button"
              >
                REMOVE
              </button>
            )}

            <button
              onClick={() => alert("Added to FAVOURITE🤍")}
              className="wishlist__button items__wishlist__button"
            >
              FAVOURITE🤍
            </button>
          </div>
        </div>
        <div className="container-sm information">
          <span>{`${items.title}   (${items.description})`}</span>
          <button className="btn btn-success rating">{items.rating}⭐</button>
          <h1>
            {handleCurrency(
              discountedPrice(items.price, items.discountPercentage)
            )}
          </h1>
          <span style={{ textDecoration: "line-through" }}>
            {handleCurrency(items.price * 100)}
          </span>
          <div className="">
            <h5>Available offers</h5>
            <span>Bank Offer5% Cashback on Flipkart Axis Bank Card</span>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="container">
      <h1>There is nothing to show</h1>
    </div>
  );
};

export default Items;
