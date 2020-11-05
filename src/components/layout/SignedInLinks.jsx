import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authAction'
import './SignedInLinks.scss'

const SignedInLinks = (props) => {
   console.log(props.profile)
  return (
    <div>
      <div className="signedin-container">
        <NavLink to='/create-post'>New Project</NavLink>
        <button onClick={props.signOut}>Log Out</button>
        <NavLink to='/' className="btn btn-floating pink lighten-1">
          {props.profile.displayName}
        </NavLink>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

const mapStateToProps = (state) => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks)
// export default SignedInLinks