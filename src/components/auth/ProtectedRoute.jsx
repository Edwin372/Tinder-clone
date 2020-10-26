import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'


function ProtectedRoute({path , component, auth}) {
    if (!auth.uid) return <Redirect to='/signin' /> 
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