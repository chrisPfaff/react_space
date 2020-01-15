import React, { useState } from "react";
import "../styles/Darkmode.scss";

const Darkmode = props => {
  const [dark, setDark] = useState(false);

  const clickFunction = e => {
    const body = document.querySelector("body");
    const links = document.querySelectorAll("a");
    const para = document.querySelectorAll("p");
    const darkModeText = document.getElementsByClassName(
      "DarkmodeContainer_name"
    );
    const header = document.getElementsByClassName("App_header");
    const logo = document.getElementsByClassName("App_logo_dark")[0];
    const description = document.querySelector("h2");
    const title = document.querySelector("h1");

    if (dark === false) {
      setDark(true);
      links.forEach(item => {
        item.classList.add("dark");
      });
      para.forEach(item => {
        item.classList.add("dark");
      });
      body.classList.add("dark");
      darkModeText[0].classList.add("dark");
      header[0].classList.add("dark");
      description.classList.add("dark");
      title.classList.add("dark");
      logo.style.zIndex = 2;
    } else {
      setDark(false);
      links.forEach(item => {
        item.classList.remove("dark");
      });
      para.forEach(item => {
        item.classList.remove("dark");
      });
      body.classList.remove("dark");
      darkModeText[0].classList.remove("dark");
      header[0].classList.remove("dark");
      description.classList.remove("dark");
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
