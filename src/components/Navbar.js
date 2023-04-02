import React, { useRef } from "react";
import "./Navbar.scss";
import { TbBrandReactNative } from "react-icons/tb";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const mobileMenuRef = useRef(null);

  function handleHamburgerPress() {
    mobileMenuRef.current.classList.toggle("hide");
  }
  return (
    <>
      <nav>
        <a href="">
          <div className={"iconBox"}>
            <TbBrandReactNative color="white" fontSize={30} />
          </div>
        </a>

        <ul className={"menu"}>
          <li className={"menuItem"}>
            <a href="" className={"menuItemText"}>
              Home
            </a>
          </li>
          <li className={"menuItem"}>
            <a href="" className={"menuItemText"}>
              Some
            </a>
          </li>
          <li className={"menuItem"}>
            <a href="" className={"menuItemText"}>
              Blog
            </a>
          </li>
          <li className={"menuItem"}>
            <a href="" className={"menuItemText"}>
              About
            </a>
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
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
