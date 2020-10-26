import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import Logo from '../../svg/logo.svg'
import {sendEmailVerification} from '../../store/actions/authAction'
import './Verification.scss'

 function Verification({auth, sendEmailVerification}) {
     console.log(auth.emailVerified)
    if(!auth) return (<Redirect to="/"/>)
    if(auth.emailVerified) return (<Redirect to="/"/>)

    return (
        <div id="verification-container">
            <img src={Logo} alt="logo"/>
            <div id="verification-form">
                <p> You are almost there!!!  (☞ﾟヮﾟ)☞   Just one more step</p>
                <p> A verification link was sent to your email, please check your mail inbox. </p>
                <p> If you  do not receive anything, <button onClick={async () =>{sendEmailVerification()}}>Click here</button> to resent</p>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch)=> {
  return {
      sendEmailVerification: () => dispatch(sendEmailVerification())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Verification)