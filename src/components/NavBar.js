import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <div className="container">
        <div>
          <Link to="/" className="brand-logo">
            <b style={{ color: "black" }}>Pizza Palace</b>
            <img
              vspace="0px"
              hspace="10px"
              src="./pizza-box.svg"
              width="50px"
            />
          </Link>
        </div>

        <ul className="right">
          <li>
            <Link to="/">Shop</Link>
          </li>
          <li>
            <Link to="/cart">My cart</Link>
          </li>
          <li>
            <Link to="/login">
              <i className="material-icons">shopping_cart</i>
              Checkout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
