import React, { useState } from "react";
import "./DropDownOption.scss";
import Dotdotdot from "../../svg/dotdotdot.svg";

export default function ButtonOptions(props) {
  const [boolDropDown, toggleDropDown] = useState(false);
  return (
    <div id="option-container">
      <button id="dotdot-button" onClick={() => toggleDropDown(!boolDropDown)}>
        <img id="dotdotdot-img" src={Dotdotdot} alt="edit-button" />
      </button>
      <div
        className={`dropdown-option-container ${
          boolDropDown ? "visible" : "hidden"
        }`}
      >
        {props.buttons.map((button, index) => (
          <button
            key={index}
            className="dropdown-option"
            onClick={() => button.handleClick()}
          >
            {button.name}
          </button>
        ))}
      </div>
    </div>
  );
}
