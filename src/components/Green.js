import * as React from "react";
import Light from "./Light";

const Green = ({ isOn }) => (
  <Light
    style={{
      backgroundColor: isOn ? "#00FF00" : "#00b300",
      boxShadow: isOn && "0 0 6em #33ff33"
    }}
  />
);

export default Green;
