import { useContext } from "react";
import { CartContext } from "../store/cart-list-store";
import { ProductListContext } from "../store/product-list-store";

const CartSummary = () => {
  const { product } = useContext(ProductListContext);
  const { cart } = useContext(CartContext);

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

  return (
    <div className="price__details__div">
      <ul className="list-group list-group-flush price__details__list">
        <li className="list-group-item details__list">
          PRICE DETAILS <span className="float-right">({totalItem} Items)</span>
        </li>
        <li className="list-group-item">
          <p className="font-family">
            Price (no. item){" "}
            <span className="li__span__1 float-right">₹{totalMRP}</span>
          </p>
          <p className="font-family">
            Discount{" "}
            <span className="li__span__2 float-right">-₹{totalDiscount}</span>
          </p>
          <p className="font-family">
            Delivery Charges
            <span className="li__span__3 float-right">₹{DELIVERY_CHARGES}</span>
          </p>
        </li>
        <li className="list-group-item amount__list font-family">
          Total Amount{" "}
          <span className="li__span__4 float-right">₹{finalPayment}</span>
        </li>
        <li className="list-group-item msg__list font-family">
          You will save ₹{totalDiscount} on this purchase
        </li>
        <p className="safety__msg font-family">
          Safe and Secure Payments.Easy returns.100% Authentic products.
        </p>
      </ul>
    </div>
  );
};

export default CartSummary;
