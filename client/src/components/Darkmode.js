import React, { useState } from "react";
import "../styles/Darkmode.scss";

const Darkmode = props => {
  const [dark, setDark] = useState(false);

  const clickFunction = e => {
    let body = document.querySelector("body");
    let appHeader = document.querySelectorAll("a");
    let darkModeText = document.getElementsByClassName(
      "DarkmodeContainer_name"
    );
    let header = document.getElementsByClassName("App_header");
    let logo = document.getElementsByClassName("App_logo_dark")[0];

    if (dark === false) {
      setDark(true);
      appHeader.forEach(item => {
        item.classList.add("dark");
      });
      body.classList.add("dark");
      darkModeText[0].classList.add("dark");
      header[0].classList.add("dark");
      logo.style.zIndex = 2;
    } else {
      setDark(false);
      appHeader.forEach(item => {
        item.classList.remove("dark");
      });
      body.classList.remove("dark");
      darkModeText[0].classList.remove("dark");
      header[0].classList.remove("dark");
      logo.style.zIndex = 0;
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
