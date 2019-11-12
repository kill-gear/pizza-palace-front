import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div className="login-div">
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input id="first_name" type="text" className="validate" />
                <label for="first_name">Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="email" type="email" className="validate" />
                <label for="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="password" type="password" className="validate" />
                <label for="password">Password</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="password" type="password" className="validate" />
                <label for="confirm-password">Confirm Password</label>
              </div>
            </div>
          </form>

          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Register
            <i className="material-icons right">send</i>
          </button>
        </div>
      </div>
    );
  }
}
