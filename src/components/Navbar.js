import React, { useRef } from "react";
import "./Navbar.scss";
import { TbBrandReactNative } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const mobileMenuRef = useRef(null);

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
            <NavLink to={"/wishlist"} className={"menuItemText"}>
              Wishlist
            </NavLink>
          </li>
          <li className={"menuItem"}>
            <NavLink to={"/cart"} className={"menuItemText"}>
              Cart
            </NavLink>
          </li>
          <li className={"menuItem"}>
            <NavLink to={"/about"} className={"menuItemText"}>
              About
            </NavLink>
          </li>

          <button className={"menuBtn"}>
            <span className={"menuBtnText"}>Connect Wallet</span>
          </button>
        </ul>

        {/* mobile */}
        <button className={"mobileMenuBtn"} onClick={handleHamburgerPress}>
          <GiHamburgerMenu color="black" />
        </button>

        <ul ref={mobileMenuRef} className={"mobileMenu hide"}>
          <button onClick={handleHamburgerPress}>close</button>

          <span>asdas</span>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
