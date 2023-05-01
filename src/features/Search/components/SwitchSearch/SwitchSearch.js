import { useState } from "react";
import "./SwitchSearch.scss";
const SwitchSearch = (props) => {
  const [state, setState] = useState(false);

  const handleSwitch = () => {
    setState((prev) => !prev);
    props.onSwitch(state);
  };

  return (
    <label className="switch" onChange={handleSwitch}>
      <input type="checkbox" />
      <span className="slider"></span>
      <div className="text">
        <span>景點</span>
        <span>住宿 </span>
      </div>
    </label>
  );
};

export default SwitchSearch;
