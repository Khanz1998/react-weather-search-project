import React from "react";
import Weather from "./Weather";
import "./index.css";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather Wise</h1>
        <Weather />

        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/zahrakhan1998/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zahra Khan
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Khanz1998/react-weather-search-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on Github
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}
