import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Share from "./pages/Share";
import logo from "./logo.svg";
import history from "./history";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/share" component={Share} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
