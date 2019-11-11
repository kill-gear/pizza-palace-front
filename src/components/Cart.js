import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeItem,
  addQuantity,
  subtractQuantity
} from "./actions/cartActions";
import cartReducer from "./reducers/cartReducer";
class Cart extends Component {
  handleRemove = id => {
    this.props.removeItem(id);
  };
  //to add the quantity
  handleAddQuantity = id => {
    this.props.addQuantity(id);
  };
  //to substruct from the quantity
  handleSubtractQuantity = id => {
    this.props.subtractQuantity(id);
  };
  render() {
    let addedItems = this.props.items.length ? (
      this.props.items.map(item => {
        return (
          <div className="cart-list">
            <li className="collection-item avatar" key={item.id}>
              <div className="item-img">
                <img src={item.img} alt={item.img} />
              </div>
              <div className="item-desc">
                <span className="title">{item.title}</span>
                <p>{item.desc}</p>
                <p>
                  <b>Price: {item.price}$</b>
                </p>
                <p>
                  <b>Quantity: {item.quantity}</b>
                </p>
                <div className="add-remove">
                  <Link to="/cart">
                    <i
                      className="material-icons"
                      onClick={() => {
                        this.handleAddQuantity(item.id);
                      }}
                    >
                      arrow_drop_up
                    </i>
                  </Link>
                  <Link to="/cart">
                    <i
                      className="material-icons"
                      onClick={() => {
                        this.handleSubtractQuantity(item.id);
                      }}
                    >
                      arrow_drop_down
                    </i>
                  </Link>
                </div>
                <button
                  className="waves-effect waves-light btn pink remove"
                  onClick={() => {
                    this.handleRemove(item.id);
                  }}
                >
                  Remove
                </button>
              </div>
            </li>
          </div>
        );
      })
    ) : (
      <div>
        <h2>Add Pizzas to cart :) </h2>
        <img src="/empty-cart.svg" alt="Cart is Empty" className="empty-cart" />
      </div>
    );
    return (
      <div className="container">
        <div className="cart">
          <h3>{this.props.items.length ? "You have ordered:" : null}</h3>
          <ul className="collection">{addedItems}</ul>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    items: state.items.filter(item => item.quantity > 0)
  };
};
const mapDispatchToProps = dispatch => {
  return {
    removeItem: id => {
      dispatch(removeItem(id));
    },
    addQuantity: id => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: id => {
      dispatch(subtractQuantity(id));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
