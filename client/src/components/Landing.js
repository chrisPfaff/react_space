import React from "react";
import "../styles/Landing.scss";

function Landing() {
  return (
    <div className="Landing">
      <div className="Landing_hero">
        <h1>React Space</h1>
        <video className="Landing_video" autoPlay muted loop>
          <source src="milkyway.mp4" type="video/mp4"></source>
        </video>
      </div>
      <div className="Landing_content">
        <p>
          <span>This</span> App was created using NASA's free api. I also used
          the React hooks API instead of classes and basic functional
          components. The first <strong>Landing Page</strong> I used a basic
          React component with some SASS styling to create a .MP4 video
          background upon entering the app.
        </p>
      </div>
    </div>
  );
}

export default Landing;
