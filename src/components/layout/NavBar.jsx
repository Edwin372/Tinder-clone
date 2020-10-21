import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLink from  './SignIn.jsx'
import SignedOutLink from './SignOut.jsx'

export default function  NavBar () { 
    return (
        <nav className="nav-wraper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Nerds</Link>
                <SignedInLink/>
                <SignedOutLink/>
            </div>
        </nav>
    )
}