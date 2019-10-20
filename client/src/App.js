import React from "react";
import Home from "./components/Home.js";
import Search from "./components/Search.js";
import Notfound from "./components/Notfound.js";
import Darkmode from "./components/Darkmode.js";

import "./styles/App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App_header">
          <Link className="App_logo_light" to="/">
            <img className="logo" src="logo.png" alt="main header image" />
          </Link>
          <Link className="App_logo_dark" to="/">
            <img className="logo" src="logoDark.png" alt="main header image" />
          </Link>
          <div className="App_nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <Darkmode />
          </div>
        </header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/search">
            <Search />
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
