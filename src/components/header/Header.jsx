import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
// import crown from "../../assets/img/crown.svg";
import { ReactComponent as Logo } from "../../assets/img/crown.svg";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        {/* <img src={crown} alt="logo" /> */}
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          shop
        </Link>
        <Link to="/contact" className="option">
          contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
