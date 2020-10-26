import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

 function Verification({auth}) {
    if(auth.emailVerified) return (<Redirect to="/"/>)
    return (
        <div>
            hello
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth
    }
  }

  export default connect(mapStateToProps)(Verification)