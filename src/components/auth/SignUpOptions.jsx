import React, { Component } from 'react'
import './SignUpOptions.scss'
import SocialAccountBtn from '../buttons/SocialAccountBtn.jsx'
import SignUp from '../../svg/signUp.svg'
import Logo from '../../svg/logo.svg'
// import {NavLink} from 'react-router-dom'

export default class SignUpOptions extends Component {
    
    render() {
        return (
            <div id="sign-up-options">
                <img src={Logo} alt=""/>
                <img src={SignUp} alt="" style={{marginBottom: '53px'}}/>
                <SocialAccountBtn id="the-nerd-btn" onClick={() =>  {window.location.replace('/signup')}}/>
                <SocialAccountBtn id="facebook-btn" onClick={() => {}}/>
                <SocialAccountBtn id="google-btn" onClick={() => {}}/>
                <p>Already have an account?<a href="/signin"> Click here</a> to sign in</p>
            </div>
        )
    }
}
