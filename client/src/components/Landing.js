import React from "react";
import "../styles/Landing.scss";

function Landing() {
  return (
    <div className="Landing">
      <div className="Landing_hero">
        <h1>React Space</h1>
        <video className="Landing_video" playsInline autoPlay muted loop>
          <source src="milkyway.mp4" type="video/mp4"></source>
        </video>
      </div>
      <div className="Landing_content">
        <p>
          <span className="Landing_para_beginning">T</span>his App was created
          using NASA's free api.{" "}
        </p>
        <br />
        <p>
          <span className="Landing_para_beginning">I</span> used the React hooks
          API instead of classes and basic functional components. I included a
          proprietary dark mode switch for ease of reading. The first{" "}
          <strong>Landing Page</strong> I used a basic React component with some
          SASS styling to create a .MP4 video background upon entering the app.
        </p>
        <br />
        <p>
          <span className="Landing_para_beginning">T</span>he second page uses
          NASA's daily image api(APOD) or{" "}
          <a
            className="apod_link"
            href="http://apod.nasa.gov/apod/astropix.html"
          >
            Astronomy Picture of the Day
          </a>{" "}
          This endpoint structures the APOD imagery and associated metadata so
          that it can be repurposed for other applications. It uses a hook which
          fetches the image along with data about said image and displays it in
          a responsive webpage.
        </p>
        <br />
        <p>
          <span className="Landing_para_beginning">F</span>or the third page I
          used NASA's search api. This API allows you to search NASA's image and
          video library. The images.nasa.gov API is organized around REST, has
          predictable/resource­-oriented URLs and uses HTTP response codes to
          indicate API errors. This API uses built-­in HTTP features such as
          HTTP authentication and HTTP verbs, which are understood by many
          off-­the-­shelf HTTP clients.
        </p>
        <br />
        <p>
          <span className="Landing_para_beginning">T</span>he last page uses
          EONET(Earth Observatory National Event Tracker). Using client
          applications, such as{" "}
          <a className="apod_link" href="https://worldview.earthdata.nasa.gov/">
            NASA EOSDIS’ Worldview{" "}
          </a>
          , users can browse the entire globe daily and look for natural events
          as they occur. Storms are regularly spotted in the tropics, dust
          storms over deserts, forest fires in the summers. These events are
          occurring constantly and NASA NRT imagery can represent them all using
          a variety of different data parameters. However, the user’s experience
          is tailored, and therefore restricted, by the client application. What
          if there was an API that provided a curated list of natural events and
          provided a way to link those events to event-related NRT image layers?
          Enter EONET.
        </p>
        <br />
      </div>
    </div>
  );
}

export default Landing;
