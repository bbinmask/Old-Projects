import AccountContext from "../store/account-store";
import "./Account.css";
import { FaWallet } from "react-icons/fa6";
import React, { useContext, useRef, useState } from "react";
import { GrMoney } from "react-icons/gr";
import Login from "./Login";

const Account = () => {
  const { userName, email, userId, wallet, setWallet } =
    useContext(AccountContext);

  const [active, setActive] = useState(false);
  const walletElement = useRef();

  const handleActive = () => {
    setActive(!active);
  };

  const handleWallet = () => {
    const money = walletElement.current.value;
    setWallet(wallet + Number(money));
    walletElement.current.value = "";
    return wallet;
  };

  return userName == "" || email == "" ? (
    <Login />
  ) : (
    <div className="account__container">
      <div className="heading__div">
        <h1 className="">Hello {userName}</h1>
        <div className="wallet__div">
          <button
            onClick={handleActive}
            className="rounded-4 btn btn-dark wallet"
          >
            <span className="wallet__text">Wallet</span>

            <FaWallet />
          </button>
          <span className="wallet__bal">Total Bal. {wallet}</span>
          {active && (
            <div>
              <div
                className="card"
                style={{
                  width: "10rem",
                  backgroundColor: "#bcddfc",
                  color: "white",
                }}
              >
                <img
                  style={{ width: "9.9rem", height: "8rem" }}
                  src="./public/wallet.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body add__bal">
                  <h5
                    style={{
                      fontFamily: "Brush Script",
                      color: "black",
                      fontWeight: "bold",
                    }}
                    className="card-title"
                  >
                    Add Balance <GrMoney />
                  </h5>
                  <input
                    ref={walletElement}
                    style={{ display: "block", marginBottom: "5px" }}
                    type="number"
                    min={1000}
                    max={1000000}
                  />
                  <button
                    onClick={handleWallet}
                    href="#"
                    className="btn btn-success"
                  >
                    Add{" "}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <p>Email: {email}</p>
      <p>User Id: {userId}</p>
    </div>
  );
};

export default Account;
