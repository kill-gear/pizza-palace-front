import React, { Component } from "react";
import { connect } from "react-redux";
import { initItems } from "./actions/cartActions";
import Item from "./Item";

class Home extends Component {
  componentDidMount = async () => {
    // console.log(this.props.items, "component re-render hacky");
    if (this.props.items.length === 0) {
      let rawItems = await fetch(
        "http://127.0.0.1:8000/api/pizzas/"
      ).then(val => val.json());
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
