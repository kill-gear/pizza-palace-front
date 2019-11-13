import React, { Component } from "react";
import Payment from "./Payment";
import { connect } from "react-redux";
import { setFields } from "./actions/cartActions";
class Login extends Component {
  handleChange = event => {
    const { value, name } = event.target;
    this.props.setFields(name, value);
    console.log(this.fields, "Inside final payment page");
  };

  render() {
    const product = {
      price: this.props.total.toFixed(2)
    };

    return (
      <div className="row register">
        <div className="sign-up-div">
          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <input
                    onChange={this.handleChange}
                    name="name"
                    id="first_name"
                    type="text"
                    className="validate"
                  />
                  <label htmlFor="first_name">Name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    onChange={this.handleChange}
                    name="email"
                    id="email"
                    type="email"
                    className="validate"
                  />
                  <label htmlFor="email">Email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input
                    onChange={this.handleChange}
                    name="address"
                    id="address1"
                    type="text"
                    className="validate"
                  />
                  <label htmlFor="address1">Delivery Address</label>
                </div>
              </div>
            </form>

            <div
              className={
                this.props.name.length &&
                this.props.address.length &&
                this.props.email.length
                  ? "payment"
                  : "payment disabled"
              }
            >
              <Payment handleChange={this.handleChange} product={product} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  total: state.total,
  name: state.name,
  email: state.email,
  address: state.address
});

const mapDispatchToProps = dispatch => {
  return {
    setFields: (name, value) => {
      dispatch(setFields(name, value));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
