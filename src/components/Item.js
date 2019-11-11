import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "./actions/cartActions";
class Item extends Component {
  handleClick = id => {
    this.props.addToCart(id);
  };

  render() {
    let item = this.props.item;

    return (
      <div className="card" key={item.id}>
        <div className="card-image">
          <img src={item.img} alt={item.title} />
          <span className="card-title">{item.title}</span>
          <span
            to="/"
            className="btn-floating halfway-fab waves-effect waves-light red"
            onClick={() => {
              this.handleClick(item.id);
            }}
          >
            <i className="material-icons">add</i>
          </span>
          <span className="qty">{item.quantity}</span>
        </div>

        <div className="card-content">
          <p>{item.desc}</p>
          <p>
            <b>Price: {item.price}$</b>
          </p>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(addToCart(id));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Item);
