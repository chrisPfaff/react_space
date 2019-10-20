import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Search.scss";

function Search(props) {
  const [dataArr, setData] = useState([]);
  const [searchData, setSearchData] = useState("");

  const fetchData = data => {
    setData(data);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("search", searchData);
    setSearchData("");
  };

  const handleChange = e => {
    setSearchData(e.target.value);
    console.log(searchData);
  };
  useEffect(() => {
    const getData = () => {
      // await axios
      // .get("http://localhost:8080/getepic")
      // .then(function(response) {
      //   console.log(response);
      //   fetchData(response.data);
      // })
      // .catch(function(error) {
      //   console.log(error);
      // });
    };
    // getData();
  });

  return (
    <div className="Search">
      <div className="Search_container">
        <h1 className="Search_heading">Search</h1>
        <p>Use NASA's Search API</p>
        <form onSubmit={handleSubmit} className="Search_form">
          <label>
            Search
            <input
              onChange={handleChange}
              type="search"
              name="search"
              id="search"
              placeholder={searchData}
            />
            <input type="submit" value="submit" />
          </label>
        </form>
      </div>
    </div>
  );
}

export default Search;