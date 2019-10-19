import React from "react";
import "../styles/Loading.scss";

const Loading = () => {
  return (
    <div className="loadingContainer">
      <img className="notFound_image" src="404.png" alt="loading" />
    </div>
  );
};

export default Loading;
