import * as React from "react";
import Light from "./Light";

const Red = ({ isOn }) => (
  <Light
    style={{
      backgroundColor: isOn ? "#FF0000" : "#b30000",
      boxShadow: isOn && "0 0 6em #ff3333"
    }}
  />
);

export default Red;
