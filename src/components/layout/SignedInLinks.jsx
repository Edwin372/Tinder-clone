import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authAction'

const SignedInLinks = (props) => {
   console.log(props.profile)
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/create-post'>New Project</NavLink></li>
        <li><button onClick={props.signOut}>Log Out</button></li>
        <li><NavLink to='/' className="btn btn-floating pink lighten-1">
          {props.profile.displayName}
        </NavLink></li>
      </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
