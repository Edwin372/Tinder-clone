import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authAction'
import StyledInput from '../inputs/StyledInput.jsx'
import StyledButton from '../buttons/StyledButton.jsx'
import Logo from '../../svg/logo.svg'
import './SignUp.scss'

class SignUp extends Component {
  state = {
    username:'',
    password:'',
    email:'',
    dob:''
  }
  handleChange = (e) => {
    if (e.target.id !== 'confirm-password') {
      this.setState({
        [e.target.id]: e.target.value
      })
    }
  
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('hello')
    this.props.signUp(this.state); 
  }
  render() {
    const { auth, authError } = this.props;
  if (auth.uid && auth.emailVerified) {return <Redirect to='/' /> }
  else if (auth.uid && !auth.emailVerified) {return <Redirect to='/verify' /> }
    console.log(auth.emailVerified)
    return (
      <div className="signup-container">
         <img src={Logo} alt=""/>
        <form className="white" onSubmit={this.handleSubmit}>
          <div className="sign-up-input-container">
            <div className="signup-input-col">
              <StyledInput label="Email" type="email" id="email" onChange={this.handleChange} required={true}/>
              <StyledInput label="Username" type="username" id="username" onChange={this.handleChange} required={true}/>
            </div>
            <div className="signup-input-col">
              <StyledInput label="Date of birth" type="date" id="dob"  onChange={this.handleChange} required={true}/>
              <StyledInput label="Password" type="password"  id="password"  onChange={this.handleChange} required={true}/>
              <StyledInput label="Confirm Password" type="password"  id="confirm-password"  onChange={this.handleChange} required={true}/>
            </div>
          </div>
          
           <StyledButton text="Create"/>
           <div className="center red-text">
              { authError ? <p>{authError}</p> : null }
           </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    signUp: (creds) => dispatch(signUp(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
