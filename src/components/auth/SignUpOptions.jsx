import React, { Component } from 'react'
import './SignUpOptions.scss'
import SocialAccountBtn from '../buttons/SocialAccountBtn.jsx'
import SignUp from '../../svg/signUp.svg'
import Logo from '../../svg/logo.svg'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import { signInWithSocialAccount } from '../../store/actions/authAction'


class SignUpOptions extends Component {
   
    render() {
        const { auth } = this.props;
        if (auth.uid) return <Redirect to='/' /> 
        return (
            <div id="sign-up-options">
                <img src={Logo} alt=""/>
                <img src={SignUp} alt="" style={{marginBottom: '53px'}}/>
                <SocialAccountBtn id="the-nerd-btn" onClick={() =>  {window.location.replace('/signup')}}/>
                <SocialAccountBtn onClick={() => {this.props.signInWithSocialAccount('facebook')}} id={"facebook-btn"} />
                <SocialAccountBtn onClick={() => {this.props.signInWithSocialAccount('google')}} id={"google-btn"}/>
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

  const mapDispatchToProps = (dispatch) => {
    return {
      signInWithSocialAccount: (provider) => dispatch(signInWithSocialAccount(provider))
    }
  }
  

export default connect(mapStateToProps, mapDispatchToProps)(SignUpOptions)