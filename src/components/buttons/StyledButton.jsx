import React from 'react'
import './StyledButton.scss'

export default function StyledButton({onClick, text}) {
    return (
    <button className="styled-button" onClick={onClick}>{text}</button>
    )
}
