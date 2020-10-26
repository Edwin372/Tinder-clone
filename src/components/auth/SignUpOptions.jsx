import React, { Component } from 'react'
import './SignUpOptions.scss'
import SocialAccountBtn from '../buttons/SocialAccountBtn.jsx'
import SignUp from '../../svg/signUp.svg'
import Logo from '../../svg/logo.svg'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

class SignUpOptions extends Component {
   
    render() {
        const { auth } = this.props;
        if (auth.uid) return <Redirect to='/' /> 
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

const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth
    }
  }

export default connect(mapStateToProps)(SignUpOptions)