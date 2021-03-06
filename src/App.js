import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { silentLogin } from "./actions";
import { PrivateRoute } from "./components/PrivateRoute";
import Header from "./components/Header";
import Home from "./pages/Home";
import Share from "./pages/Share";
import history from "./history";
import "./App.css";

const NotFound = () => (
  <div className="page-not-found"><h3>Page Not Found</h3></div>
)

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(silentLogin());
  }, [dispatch]);

  return (
    <div className="App">
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/share" component={Share} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
