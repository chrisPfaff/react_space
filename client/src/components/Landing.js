import React from "react";
import "../styles/Landing.scss";

function Landing() {
  return (
    <div className="Landing">
      <div className="Landing_hero">
        <h1>React Space</h1>
        <video className="Landing_video" autoPlay muted>
          <source src="milkyway.mp4" type="video/mp4"></source>
        </video>
      </div>
    </div>
  );
}

export default Landing;
