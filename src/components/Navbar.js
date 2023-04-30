import React, { useRef } from "react";
import "./Navbar.scss";
import { TbBrandReactNative } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { selectCartItems } from "../redux/feature/cartSlice";
import { useSelector } from "react-redux";
const Navbar = () => {
  const mobileMenuRef = useRef(null);
  const cartItems = useSelector(selectCartItems);
  console.log(mobileMenuRef, "mobileMenuRef");

  function handleHamburgerPress() {
    mobileMenuRef.current.classList.toggle("hide");
  }
  return (
    <>
      <nav>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : "not-active"
          }
        >
          <div className={"iconBox"}>
            <TbBrandReactNative color="white" fontSize={30} />
          </div>
        </NavLink>

        <ul className={"menu"}>
          <li className={"menuItem"}>
            <NavLink to={"/"} className={"menuItemText"}>
              Home
            </NavLink>
          </li>

          <li className={"menuItem"}>
            <NavLink to={"/cart"} className={"menuItemText"}>
              Cart
              {cartItems.length !== 0 ? (
                <span className="badge">{cartItems.length}</span>
              ) : null}
            </NavLink>
          </li>
          <li className={"menuItem"}>
            <NavLink to={"/about"} className={"menuItemText"}>
              About
            </NavLink>
          </li>

          {/* <button className={"menuBtn"}>
            <span className={"menuBtnText"}>Connect Wallet</span>
          </button> */}
        </ul>

        {/* mobile */}
        <button className={"mobileMenuBtn"} onClick={handleHamburgerPress}>
          <GiHamburgerMenu color="black" />
        </button>

        <ul ref={mobileMenuRef} className={"mobileMenu hide"}>
          <button onClick={handleHamburgerPress}>close</button>

          <NavLink
            to={"/"}
            className={"mLink"}
            style={{
              background: "white",
              padding: 10,
              margin: "10px",
            }}
          >
            Home
          </NavLink>

          <NavLink
            className={"mLink"}
            to={"/cart"}
            style={{
              background: "white",
              margin: "10px",
              padding: 10,
            }}
          >
            Cart
          </NavLink>
          <NavLink
            className={"mLink"}
            to={"/about"}
            style={{
              background: "white",
              margin: "10px",
              padding: 10,
            }}
          >
            About
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
