import React from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { selectCartItems } from "../redux/feature/cartSlice";

const ShoppingCart = () => {
  const cartItems = useSelector(selectCartItems)
  return (
    <>
      <Navbar />
      <h1>ShoppingCart</h1>
      <p style={{fontSize:40}}>{JSON.stringify(cartItems, null, 4)}</p>
    </>
  );
};

export default ShoppingCart;
