// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Header.css";
import Login from "../login/Login";

const Header = () => {
  return (
    <div className="header">
        <div><h3>Auth APP</h3></div>
        {/* <div className="head-mid">
            <div><a className="menu__link" href="/about">About</a></div>
            <div><a className="menu__link" href="/contact">Contact</a></div>
            <div><a className="menu__link" href="/support">Support</a></div>
        </div> */}
        <div><Login/></div>
    </div>
  );
};

export default Header;
