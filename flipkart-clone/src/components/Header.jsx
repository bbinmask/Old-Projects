import React, { useContext } from "react";
import "./Header.css";
import { IoSearchSharp } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import AccountContext from "../store/account-store";
import { useSelector } from "react-redux";
function Header() {
  const cart = useSelector((store) => store.cart);
  const { userName, userId, wallet } = useContext(AccountContext);

  return (
    <div className="header">
      <img
        className="header__logo"
        src="/public/logo.png"
        alt="Flipkart Logo"
      />
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <div
          onClick={() => {
            alert("Items searched");
          }}
          className="header__searchIcon"
        >
          {" "}
          <IoSearchSharp style={{ color: "black", fontSize: "1.4rem" }} />
        </div>
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">
            {userName === "" ? "Hello Guest" : `Bal: ₹${wallet}`}
          </span>
          <Link to="/account" className="header__optionLineTwo">
            {userName === "" ? "Sign In" : userName}
          </Link>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/cart" className="header__optionBasket">
          <span className="position-absolute  translate-middle bg-danger border border-light rounded-circle">
            {cart.length}
          </span>
          <IoCartOutline className="cart-icon" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
