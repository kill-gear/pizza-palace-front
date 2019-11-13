import React, { component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/NavBar";
import Cart from "./components/Cart";
import Login from "./components/Login";
import { stat } from "fs";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/payment" component={Login} />}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
