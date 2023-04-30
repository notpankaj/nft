import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeToCart,
  selectCartItems,
} from "../../redux/feature/cartSlice";
import "./ShoppingCart.css";
import { BiMinus, BiPlus } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";

import Confetti from "react-confetti";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const ShoppingCart = () => {
  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [loading, setloading] = React.useState(false);
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleMinusClick = (item) => {
    dispatch(addToCart(item));
  };

  const handlePlusClick = (item) => {
    dispatch(removeToCart(item));
  };

  function handleSubmit() {
    if (!name) {
      alert("Please enter Shipping Name!");
      return;
    }
    if (!phone) {
      alert("Please enter Shipping Phone!");
      return;
    }
    if (!address) {
      alert("Please enter Shipping Address!");
      return;
    }
    setloading(true);
    setTimeout(() => {
      setloading(false);
      navigate("/thankyou");
    }, 1200);
  }

  return (
    <>
      <Navbar />
      {cartItems.length ? (
        <section className="cart__wrapper">
          <div className="box">
            <div className="cart__header">
              <span>PRODUCT</span>
              <span>PRICE</span>
              <span>QTY</span>
              <span>TOTAL</span>
            </div>
            {cartItems.map((item) => {
              return (
                <div className="cart__item">
                  <div className="sec-1">
                    <img
                      src={`/IllustrationbyMeldaVNH/${item.photo}`}
                      alt="nft"
                    />
                    <span className="title">{item.title}</span>
                    <span className="des">{item.des}</span>
                  </div>
                  <div className="sec-2">
                    <span>${100}</span>
                  </div>
                  <div className="sec-3">
                    <BiMinus onClick={() => handlePlusClick(item)} />
                    <span
                      style={{
                        margin: "0px 20px",
                      }}
                    >
                      {item.qty}
                    </span>
                    <BiPlus onClick={() => handleMinusClick(item)} />
                  </div>
                  <div className="sec-4">
                    <span>$ {item.qty * 100}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="checkout">
            <h1>Order Summary</h1>
            <div className="sec-1">
              <span>ITEMS 3</span>
              <span>$213.123</span>
            </div>
            <div className="sec-2">
              <span>SHIPPING NAME</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="sec-2">
              <span>SHIPPING PHONE NO.</span>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="sec-2">
              <span>SHIPPING ADDRESS</span>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="sec-x">
              <span>TOTAL COST</span>
              <span>$213.123</span>
            </div>
            <button id="checkout" onClick={handleSubmit}>
              {loading ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Loader />
                </div>
              ) : (
                "CHECKOUT"
              )}
            </button>
          </div>
        </section>
      ) : (
        <h1>EMPTY CART</h1>
      )}
    </>
  );
};

export default ShoppingCart;
