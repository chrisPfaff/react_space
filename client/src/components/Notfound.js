import React from "react";
import { useLocation } from "react-router-dom";

import "../styles/Notfound.scss";

function NotFound(props) {
  let location = useLocation();

  return (
    <div className="notFound">
      <h2 className="notFound_heading">
        No match for <code>{location.pathname}</code>
      </h2>
      <img className="notFound_image" src="404.jpeg" alt="page not found" />
      <p className="notFound_explanation">Please go back to home</p>
    </div>
  );
}

export default NotFound;
