import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authAction'
import { Redirect } from 'react-router-dom'
import StyledInput from '../inputs/StyledInput.jsx'
import StyledButton from '../buttons/StyledButton.jsx'
import bigLogo from '../../svg/bigLogo.svg'
import smallLogo from '../../svg/smallLogo.svg'
import SocialAccountBtn from '../buttons/SocialAccountBtn.jsx'
import './SignIn.scss'
class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state)
  }
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to='/' /> 
    return (
        <div className="container">
          <img src={smallLogo} alt="small-logo" id="small-logo"/>
          <img src={bigLogo} alt="big-logo"/>
          <div className="form-container">
          <form className="white" onSubmit={this.handleSubmit}>
            <StyledInput label="Email" type="email" id='email' onChange={this.handleChange}  />
            <StyledInput label="Password" type="password" id='password' onChange={this.handleChange}  />
            <StyledButton text="Login"/>
              <div className="center red-text">
                { authError ? <p id="error-text">{authError}</p> : null }
              </div>
          </form>
          <SocialAccountBtn onClick={() => {}} id={"facebook-btn"} />
          <SocialAccountBtn onClick={() => {}} id={"google-btn"}/>
           </div>
         </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
