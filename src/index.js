import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "./assets/css/bootstrap.min.css";
// import "assets/scss/paper-kit.scss";
import "./assets/css/paper-kit.css";
import "./assets/demo/demo.css";

// pages
import SearchPage from "./pages/SearchPage";
import ResultsPage from "./pages/ResultsPage";
// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/search" render={props => <SearchPage {...props} />} />
      <Route path="/results/:word" render={props => <ResultsPage {...props} />} />
      <Redirect to="/search" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
