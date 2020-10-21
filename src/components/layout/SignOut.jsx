import React from 'react'
import {NavLink} from 'react-router-dom'

export default function  SignedOutLink () { 
    return (
        <ul className="right">
            <li><NavLink to="/">Sign Up</NavLink></li>
            <li><NavLink to="/">Log In</NavLink></li>
        </ul>
    )
}