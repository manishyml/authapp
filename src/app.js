import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Users from "./components/users";
import Home from "./components/home";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/users" component={Users} />

        <Route exact path="/" component={Home} />
      </Router>
    );
  }
}
export default App;
