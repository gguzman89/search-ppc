import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

// styles
import "./assets/css/bootstrap.min.css";
// import "assets/scss/paper-kit.scss";
import "./assets/css/paper-kit.css";
import "./assets/demo/demo.css";

// pages
import SearchPage from "./pages/SearchPage";
// others

// BROWSER={chrome|opera|morzilla...} npm start | choose browser

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/search" render={props => <SearchPage {...props} />} />
      <Redirect to="/search" />
    </Switch>
  </Router>,
  rootElement
);
