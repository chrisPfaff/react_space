import React from "react";
import Home from "./components/Home.js";
import Blah from "./components/Blah.js";
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
            <Link to="/blah">Blah</Link>
          </li>
        </header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/blah">
            <Blah />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
