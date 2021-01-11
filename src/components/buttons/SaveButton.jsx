import React from 'react'
import saveOn from "../../svg/saveOn.svg";
import saveIcon from "../../svg/save.svg";
import './SaveButton.scss'

export default function SaveButton({save, saveToggle}) {
    return (
        <button id="save-icon-button" onClick={() => saveToggle(!save)}>
          {save ? (
            <img id="save-on-icon" src={saveOn} alt="saveIcon" />
          ) : (
            <img id="save-icon" src={saveIcon} alt="saveIcon" />
          )}
        </button>
    )
}
