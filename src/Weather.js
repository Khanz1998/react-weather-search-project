import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h2>London</h2>
      <ul>
        <li>Tuesday 12:00</li>
        <li>Sunny</li>
      </ul>

      <div className="row">
        <div className="col-md-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="sunny"
          ></img>
          6°C
        </div>
        <div className="col-md-6">
          <ul>
            <li>Precipitation: 0%</li>
            <li>Humidity: 48%</li>
            <li>Wind: 14 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
