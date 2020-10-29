import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'


function NeedVerifiedRoute({path , component, auth}) {
    if (!auth.emailVerified) return <Redirect to='/verify' /> 
    
    return (
        <Route path={path} component={component}/>
    )
}

const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth
    }
  }

  export default connect(mapStateToProps)(NeedVerifiedRoute)