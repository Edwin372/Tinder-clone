import React from 'react'
import './StyledInput.scss'

export default function StyledInput({type, id, onChange, htmlFor, label}) {
    return (
        <div className="input-container">
          <label htmlFor={htmlFor}>{label}</label>
          <input type={type} id={id} className='styled-input' onChange={onChange}/>
        </div>

    )
}
