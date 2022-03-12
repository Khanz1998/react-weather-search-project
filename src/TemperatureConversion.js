import React, { useState } from "react";

export default function TemperatureConversion(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("Fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="TemperatureConversion">
        <span className="temperature">{props.celsius}</span>
        <span className="units">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="TemperatureConversion">
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="units">
          <a href="/" onClick={showCelsius}>
            °C{" "}
          </a>
          | °F
        </span>
      </div>
    );
  }
}
