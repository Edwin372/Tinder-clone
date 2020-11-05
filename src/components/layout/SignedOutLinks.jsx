import React from 'react'
import {NavLink} from 'react-router-dom'
import './SignedOutLinks.scss'

export default function  SignedOutLink () { 
    return (
        <div className="signedout-container">
            <NavLink to="/signin"  id="signin-link">Sign In</NavLink>
            <NavLink to="/signup-options" id="signup-link">Sign Up</NavLink>
        </div>
    )
}

