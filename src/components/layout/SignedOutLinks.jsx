import React from 'react'
// import {NavLink} from 'react-router-dom'
import './SignedOutLinks.scss'

export default function  SignedOutLink () { 
    return (
        <div className="signedout-container">
             <a to="/signin"  id="signin-link">Sign In</a>
            <a to="/signup-options" id="signup-link">Sign Up</a>
        </div>
    )
}

