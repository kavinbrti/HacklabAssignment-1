import * as React from "react";
import Light from "./Light";

const Yellow = ({ isOn }) => (
  <Light
    style={{
      backgroundColor: isOn ? "#FFFF00" : "#b2b300",
      boxShadow: isOn && "0 0 6em #ffff33"
    }}
  />
);

export default Yellow;
