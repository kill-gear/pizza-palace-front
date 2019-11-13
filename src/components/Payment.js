import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
require("dotenv").config();

// import chair from "./chair.jpg";
// import gif from "./giphy.gif";
let API_URL = "";
if (process.env.NODE_ENV === "development") {
  API_URL = process.env.REACT_APP_API_URL_DEV;
} else {
  API_URL = process.env.REACT_APP_API_URL_PROD;
}
function Payment(props) {
  let product = props.product;
  let items = props.items;
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const paypalRef = useRef();
  const [orderId, setOrderId] = useState("-1");
  useEffect(async () => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: product.description,
                amount: {
                  currency_code: "EUR",
                  value: product.price
                }
              }
            ]
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setPaidFor(true);
          setOrderId(order.id);
          console.log(order);
        },
        onError: err => {
          setError(err);
          console.error(err);
        }
      })
      .render(paypalRef.current);
  }, [product.description, product.price]);

  if (paidFor && orderId != "-1") {
    const postData = async () => {
      const resp = await fetch(`${API_URL}/api/orders`, {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: props.name,
          email: props.email,
          address: props.address,
          status: true,
          payment_reference: orderId,
          total: props.total,
          items
        })
      });

      console.log(resp, " post request");
      alert("Your order has been successfully Placed. See you soon. :)");
      // props.history.push("/");
      window.location.href = `${process.env.REACT_APP_URL}/`;
    };
    postData();
  }

  return error ? (
    <div>Uh oh, an error occurred! {error.message}</div>
  ) : (
    <div>
      <h5>Total value: €{product.price}</h5>
      <div ref={paypalRef} />
    </div>
  );
}
const mapStateToProps = state => {
  return {
    items: state.items
      .filter(item => item.quantity > 0)
      .map(item => ({
        id: item.id,
        quantity: item.quantity
      })),
    name: state.name,
    email: state.email,
    address: state.address,
    total: state.total
  };
};
export default connect(mapStateToProps)(Payment);
