import React, { Component } from "react";

export default class Checkout extends Component {
  render() {
    return (
      <div className="total-cart">
        <div className="col s12 m6">
          <div className="card smoke-white right">
            <div className="card-content black-text">
              <span className="card-title">
                <b>Total Cart Value = </b> €{this.props.total}
              </span>
            </div>
            <div className="card-action">
              <button
                className="btn waves-effect waves-light"
                type="submit"
                name="action"
              >
                Checkout
                <i className="material-icons right">send</i>
              </button>
              {/* <a href="#">This is a link</a>
              <a href="#">This is a link</a> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
