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
import "react-toastify/dist/ReactToastify.css";

import Confetti from "react-confetti";
import Navbar from "../../components/Navbar";

const w = window.innerWidth;
const h = window.innerHeight;

const ShoppingCart = () => {
  const cartItems = useSelector(selectCartItems);

  const [confettiVisible, setIsConfettiVisible] = React.useState(false);
  const dispatch = useDispatch();
  const handleMinusClick = (item) => {
    dispatch(addToCart(item));
  };
  const notify = () => {
    setIsConfettiVisible(true);
    setTimeout(() => {
      setIsConfettiVisible(false);
    }, 5000);
    toast("ORDER PLACED SUCCESSFULLY! 👌");
  };
  const handlePlusClick = (item) => {
    dispatch(removeToCart(item));
  };
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {confettiVisible ? <Confetti width={w} height={h} /> : null}
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
              <input type="text" />
            </div>
            <div className="sec-2">
              <span>SHIPPING PHONE NO.</span>
              <input type="text" />
            </div>
            <div className="sec-2">
              <span>SHIPPING ADDRESS</span>
              <input type="text" />
            </div>
            <div className="sec-x">
              <span>TOTAL COST</span>
              <span>$213.123</span>
            </div>
            <button id="checkout" onClick={notify}>
              CHECKOUT
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
