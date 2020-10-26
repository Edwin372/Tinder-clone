import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'


function ProtectedRoute({path , component, auth}) {
    console.log(auth)
    if (!auth.uid || !auth.emailVerified) return <Redirect to='/signin' /> 
    
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