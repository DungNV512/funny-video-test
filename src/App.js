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

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(silentLogin());
  }, [dispatch]);

  return (
    <div
      className="App"
      style={{
        margin: "0 auto",
        maxWidth: "1080px",
        marginBottom: "20px",
        padding: "10px 0",
      }}
    >
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/share" component={Share} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
