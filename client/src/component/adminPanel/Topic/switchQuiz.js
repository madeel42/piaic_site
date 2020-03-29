import React from "react";
import "./switch.css";
import Switch from "react-switch";
const SwitchComponent = props => {
  const { checked, handleChange } = props;
  return (
    <div className="example">
      <label>
        <span>Open Quiz</span>
        <Switch
          onChange={handleChange}
          checked={checked}
          className="react-switch"
        />
      </label>
      <p>
        The switch is <span>{checked ? "on" : "off"}</span>.
      </p>
    </div>
  );
};
export default SwitchComponent;
