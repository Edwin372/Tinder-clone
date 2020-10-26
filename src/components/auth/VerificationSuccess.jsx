import React from 'react'
import VerificationSuccessImg from '../../svg/verificationSuccess.svg'
import VerificationBtn from '../buttons/VerificationBtn.jsx'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

 function VerificationSuccess({auth}) {
    if(auth.emailVerified) return (<Redirect to="/"/>)
    return (
        <div id="verification-success-container">
            <img src={VerificationSuccessImg} alt="verification-success" />
            <VerificationBtn onClick={()=>{window.location.href="/"}}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth
    }
  }

  export default connect(mapStateToProps)(VerificationSuccess)