import React, { Component } from "react";
import { connect } from "react-redux";
import { initItems } from "./actions/cartActions";
import Item from "./Item";
require("dotenv").config();
console.log(process.env);

class Home extends Component {
  componentDidMount = async () => {
    let API_URL = "";
    if (process.env.NODE_ENV === "development") {
      API_URL = process.env.REACT_APP_API_URL_DEV;
    } else {
      API_URL = process.env.REACT_APP_API_URL_PROD;
    }
    if (this.props.items.length === 0) {
      console.log("Just some random info", process.env);

      let rawItems = await fetch(`${API_URL}/api/pizzas/`).then(val =>
        val.json()
      );
      let items = rawItems.map(item => ({
        id: item.id,
        title: item.name,
        desc: item.description,
        quantity: 0,
        img: item.image_url,
        price: parseFloat(item.price)
      }));
      this.props.initItems(items);
    }
  };

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
const mapDispatchToProps = dispatch => ({
  initItems: items => {
    dispatch(initItems(items));
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
