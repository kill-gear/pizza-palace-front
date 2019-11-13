import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const Navbar = props => {
  let redirect = props.total ? "/payment" : "/";
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
            <Link to={redirect}>
              <i className="material-icons">shopping_cart</i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    total: state.total
  };
};

export default connect(mapStateToProps)(Navbar);
