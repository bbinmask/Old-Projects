import { useContext, useRef, useState } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import AccountContext from "../store/account-store";
import { ItemsContext } from "../store/items-store";
import { useDispatch, useSelector } from "react-redux";
import { handleCurrency } from "../store/handleCurrency";
import { placeOrder, removeItem, updateItemQuantity } from "../store/CartSlice";
import { discountedPrice } from "../functions/discountedPrice";
const Cart = () => {
  const cart = useSelector((store) => store.cart);
  const product = useSelector((store) => store.product);
  const dispatch = useDispatch();

  const { wallet, setWallet } = useContext(AccountContext);
  const { setItems } = useContext(ItemsContext);

  const handleRemove = (item) => {
    const confirm = window.confirm("Do you want to remove?");
    confirm && dispatch(removeItem(item.id));
  };
  const handlePlaceOrder = () => {
    if (wallet < finalPayment) {
      alert("Wallet is Low! Add money to your wallet");
    } else {
      const confirm = window.confirm("Do you want to place order");
      if (confirm) {
        setWallet(wallet - finalPayment);
        dispatch(placeOrder());
      }
    }
  };

  const finalItems = product.filter((item) => {
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
    return itemIndex !== -1;
  });

  let totalItem = cart.length;
  let totalMRP = 0;
  let totalDiscount = 0;
  let DELIVERY_CHARGES = 40 * totalItem;

  finalItems.forEach((bagItem) => {
    totalMRP += Math.floor(bagItem.price * 100);
    // Adjust totalDiscount based on each item's discount if needed
    const discountAmount = bagItem.discountPercentage * bagItem.price;

    // Add the discount amount to the total discount
    totalDiscount += Math.round(discountAmount);
  });
  DELIVERY_CHARGES = totalMRP >= 80000 ? 0 : 40 * totalItem;
  let finalPayment = totalMRP + DELIVERY_CHARGES - totalDiscount;

  // ******************************************************
  const [itemQuantities, setItemQuantities] = useState(() => {
    const initialQuantities = {};
    cart.forEach((item) => {
      initialQuantities[item.id] = 1;
    });
    return initialQuantities;
  });

  let itemValueElement = useRef();
  const handleIncrease = (item) => {
    if (itemQuantities[item.id] < 10) {
      setItemQuantities((prevQuantities) => ({
        ...prevQuantities,
        [item.id]: (prevQuantities[item.id] || 0) + 1,
      }));
      dispatch(
        updateItemQuantity({
          id: item.id,
          quantity: itemQuantities[item.id] + 1,
        })
      );
    } else {
      alert("You cannot buy more.");
    }
  };

  const handleDecrease = (item) => {
    if (itemQuantities[item.id] > 1) {
      setItemQuantities((prevQuantities) => ({
        ...prevQuantities,
        [item.id]: (prevQuantities[item.id] || 0) - 1,
      }));
      dispatch(
        updateItemQuantity({
          id: item.id,
          quantity: itemQuantities[item.id] - 1,
        })
      );
    } else {
      alert("Item shouldn't be less than one.");
    }
  };

  return (
    <>
      {cart.length <= 0 ? (
        <div className="empty__cart__msg">
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            🛒
            <span style={{ display: "block", fontSize: "3rem" }}>
              Cart is Emplty
            </span>
          </Link>
        </div>
      ) : (
        <div className="cart__div">
          <div className="cart__subdiv">
            <div className="address__div">
              <span style={{}}>From Saved Addresses</span>
              <button className="address__button">
                Enter Delivery Pincode
              </button>
            </div>
            {cart.map((item) => (
              <div key={item.id}>
                <div className="item__details__div">
                  <div className="item__details__subdiv">
                    <img
                      style={{ width: "150px" }}
                      src={item.images[0]}
                      alt="images"
                    />
                    <div className="details">
                      {" "}
                      <Link
                        onClick={() => setItems(item)}
                        to="/product/items"
                        className="item__name font-family on__hover"
                        style={{
                          whiteSpace: "nowrap",
                          border: "none",
                          display: "block",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          maxWidth: "250px",
                        }}
                      >
                        {`${item.title} ${item.description}`}
                      </Link>
                      <span>{item.brand}</span>
                      <br />
                      <span>{item.rating}⭐</span>
                      <div>
                        <span className="font-family product__price" name={""}>
                          {isNaN(item.totalPrice)
                            ? handleCurrency(item.price * 100)
                            : handleCurrency(item.totalPrice * 100)}
                        </span>
                        <span className="font-family product__total__price">
                          {isNaN(item.totalPrice)
                            ? handleCurrency(
                                discountedPrice(
                                  item.price,
                                  item.discountPercentage
                                )
                              )
                            : handleCurrency(
                                discountedPrice(
                                  item.totalPrice,
                                  item.discountPercentage
                                )
                              )}
                        </span>
                        <span className=" discount">
                          {item.discountPercentage}% off
                        </span>
                      </div>
                    </div>
                    <div>Delivery Time</div>
                  </div>
                </div>
                <div className="value__div">
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic mixed styles example"
                  >
                    <button
                      onClick={() => handleDecrease(item)}
                      type="button"
                      className="btn__dec"
                    >
                      -
                    </button>
                    <input
                      ref={itemValueElement}
                      type="text"
                      className="item__value"
                      min={1}
                      max={10}
                      readOnly
                      value={itemQuantities[item.id] || 1}
                    />

                    <button
                      onClick={() => handleIncrease(item)}
                      type="button"
                      className="btn__inc"
                    >
                      +
                    </button>
                  </div>
                  <span className="save__later font-family on__hover">
                    Save For Later
                  </span>
                  <span
                    className="remove font-family "
                    onClick={() => handleRemove(item)}
                  >
                    Remove
                  </span>
                </div>
              </div>
            ))}
            <div className="order__div">
              <button
                onClick={handlePlaceOrder}
                className="order__btn font-family"
              >
                PLACE ORDER
              </button>
            </div>
          </div>

          <div className="price__details__div">
            <ul className="list-group list-group-flush price__details__list">
              <li className="list-group-item details__list">
                PRICE DETAILS{" "}
                <span className="float-right">({totalItem} Items)</span>
              </li>
              <li className="list-group-item">
                <p className="font-family">
                  Price (no. item){" "}
                  <span className="li__span__1 float-right">
                    {handleCurrency(totalMRP)}
                  </span>
                </p>
                <p className="font-family">
                  Discount{" "}
                  <span className="li__span__2 float-right">
                    -{handleCurrency(totalDiscount)}
                  </span>
                </p>
                <p className="font-family">
                  Delivery Charges
                  <span className="li__span__3 float-right">
                    {handleCurrency(DELIVERY_CHARGES)}
                  </span>
                </p>
              </li>
              <li className="list-group-item amount__list font-family">
                Total Amount{" "}
                <span className="li__span__4 float-right">
                  {handleCurrency(finalPayment)}
                </span>
              </li>
              <li className="list-group-item msg__list font-family">
                You will save {handleCurrency(totalDiscount)} on this purchase
              </li>
              <p className="safety__msg font-family">
                Safe and Secure Payments.Easy returns.100% Authentic products.
              </p>
            </ul>
          </div>
        </div>
      )}
      <center>
        <h1>Save Later</h1>
      </center>
    </>
  );
};

export default Cart;
