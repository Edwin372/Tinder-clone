import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'
import navBarLogo from '../../svg/navBarLogo.svg'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import {firestore} from '../../config/firebaseConfig'
import './NavBar.scss'

const Navbar = (props) => {
  const { auth, profile, debounceSearch } = props;
  const [notifications, setNotifications] = useState([])
  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {

    await firestore
    .collection("notifications")
    // .orderBy("createdAt", "desc")
    .where("receiverId", "==", props.auth.uid)
    .onSnapshot((querySnapshot) => {
      var notificationData = [];
      querySnapshot.forEach(function(doc) {
        notificationData.push(doc.data());
      });
      setNotifications(notificationData)
    })
  }
  const links = 
  (auth && auth.uid) 
  ? <SignedInLinks notifications={notifications} profile={profile} debounceSearch={debounceSearch || false}/> 
  : <SignedOutLinks />;

  return (
    <nav className="nav-bar">
        <Link to='/' className="brand-logo">
           <img id="logo" src={navBarLogo} alt="small-logo"/>
        </Link>
        {links}
    </nav>
  )
}

const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile,

  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect()
)(Navbar)

// export default Navbar