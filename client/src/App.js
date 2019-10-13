import React from "react";
import Home from "./components/Home.js";
import "./styles/App.scss";

function App() {
  return (
    <div className="App">
      <header className="App_header">
        <img className="App_logo" src="logo.png" alt="main header image" />
      </header>
      <Home data={"data"} />
    </div>
  );
}

export default App;
