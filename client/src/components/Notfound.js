import React from "react";
import { useLocation, Link } from "react-router-dom";

import "../styles/Notfound.scss";

function NotFound(props) {
  let location = useLocation();

  return (
    <div className="notFound">
      <h2 className="notFound_heading">
        <h1>404</h1>
        No match for <code>{location.pathname}</code>
      </h2>
      <img className="notFound_image" src="404.png" alt="page not found" />
      <p className="notFound_explanation">Its Lonely Out Here</p>
      <button className="notFound_button">
        <Link className="notFound_button_text" to="/">
          Home
        </Link>
      </button>
    </div>
  );
}

export default NotFound;
