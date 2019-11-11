import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "./actions/cartActions";
import Item from "./Item";

class Home extends Component {
  render() {
    let itemList = this.props.items.map(item => {
      console.log(item);
      return <Item item={item} key={item.id} />;
    });

    return (
      <div className="container">
        <h3 className="center">Available Pizzas</h3>
        <div className="box">{itemList}</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    items: state.items
  };
};

export default connect(mapStateToProps)(Home);
