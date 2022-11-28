import React from "react";
import ReactDOM from "react-dom";
// import TrafficLight from "./components/TrafficLight";
import TrafficLight from "./components/TrafficLightAutomata";

import "./styles.css";

function App() {
  return <TrafficLight />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
