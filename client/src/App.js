import React from "react";
import Home from "./components/Home.js";
import Epic from "./components/Epic.js";
import Notfound from "./components/Notfound.js";

import "./styles/App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App_header">
          <img className="App_logo" src="logo.png" alt="main header image" />
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/epic">E.P.I.C</Link>
          </li>
        </header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/epic">
            <Epic />
          </Route>
          <Route path="*">
            <Notfound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
