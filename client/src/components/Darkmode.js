import React from "react";
import "../styles/Darkmode.scss";

const Darkmode = props => {
  return (
    <div className="DarkmodeContainer">
      <span className="DarkmodeContainer_name">Darkmode</span>
      <label className="DarkmodeContainer_switch">
        <input type="checkbox" />
        <span className="slider round" />
      </label>
    </div>
  );
};

export default Darkmode;
