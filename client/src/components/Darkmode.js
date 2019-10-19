import React, { useState } from "react";
import "../styles/Darkmode.scss";

const Darkmode = props => {
  const [dark, setDark] = useState(false);

  const clickFunction = e => {
    let body = document.querySelector("body");
    console.log(body);
    if (dark === false) {
      setDark(true);
      body.classList.add("dark");
    } else {
      setDark(false);
      body.classList.remove("dark");
    }
  };

  return (
    <div className="DarkmodeContainer">
      <span className="DarkmodeContainer_name">Darkmode</span>
      <label className="DarkmodeContainer_switch">
        <input onClick={clickFunction} type="checkbox" />
        <span className="slider round" />
      </label>
    </div>
  );
};

export default Darkmode;
