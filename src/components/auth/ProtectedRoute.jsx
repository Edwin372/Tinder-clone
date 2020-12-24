import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'


function ProtectedRoute({path , component, auth}) {
    if (!auth.uid) {
      return <Redirect to='/signin' /> 
    }
    if (!auth.emailVerified) {
      Swal.fire(
        {
          icon: 'error',
          title: 'Oops...',
          text: 'Please verify your email to continue!',
        }
      )
      return <Redirect to='/signin' /> 
    }
    return (
        <Route path={path} component={component}/>
    )
}

const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth
    }
  }

  export default connect(mapStateToProps)(ProtectedRoute)