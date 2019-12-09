import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading.js";
import EonetDataComponent from "./EonetData.js";

import "../styles/Eonet.scss";

function Eonet(props) {
  const [eonetData, setData] = useState([]);
  const [eonetIdNumber, setDataIdNumber] = useState(6);
  const [eonetEvents, setEvent] = useState([]);

  const getEonetData = async () => {
    await axios
      .get(`/eonet?data=${eonetIdNumber}`)
      .then(function(response) {
        setEvent(response.data.events);
        setData(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  const chooseDisplay = () => {
    return (
      <div>
        <h1>{eonetData.title}</h1>
        <p>{eonetData.description}</p>
      </div>
    );
  };

  const displayEvents = () => {
    const mappedData = eonetEvents.map(item => {
      return <EonetDataComponent data={item} />;
    });
    return mappedData;
  };

  const handleSubmit = e => {
    e.preventDefault();
    getEonetData();
  };

  const handleChange = e => {
    e.preventDefault();
    setDataIdNumber(e.target.value);
  };

  return (
    <div className="eonet">
      <h1 className="eonet_title hover">Eonet</h1>
      <h2 className="eonet_title">
        Earth Observatory Natural Event Tracker (EONET)
      </h2>
      <h3>Past Natural Disaster Tracker</h3>
      <div className="eonet_body">
        <form onSubmit={handleSubmit}>
          <select
            value={eonetIdNumber}
            onChange={handleChange}
            className="eonet_select"
          >
            <option value="6">Drought</option>
            <option value="7">Dust and Haze</option>
            <option value="16">Earthquakes</option>
            <option value="9">Floods</option>
            <option value="14">Landslides</option>
            <option value="19">Manmade</option>
            <option value="15">Sea and Lake Ice</option>
            <option value="10">Severe Storms</option>
            <option value="17">Snow</option>
            <option value="12">Volcanos</option>
            <option value="13">Water Color</option>
            <option value="8">Wildfires</option>
          </select>
          <input className="eonet_button" type="submit" value="Submit" />
        </form>
      </div>
      <div>{chooseDisplay()}</div>
      <div>{displayEvents()}</div>
    </div>
  );
}

export default Eonet;
