import React, { Component } from 'react'
import ProfileHeader from '../post/ProfileHeader.jsx'
import Navbar from '../layout/NavBar.jsx'
import { connect } from "react-redux";
import './ProfilePage.scss'
class ProfilePage extends Component {

    render() {
      const currentId = this.props.location.pathname.split('/')[2]
      return (
          <div id="profile-page">
              <Navbar/>
              <ProfileHeader uid ={currentId} profile={this.props.profile} isUserProfile={currentId === this.props.auth.uid}/>
          </div>
      )
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//       signOut: () => dispatch(signOut()),
//     };
//   };
  
  const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth,
      profile: state.firebase.profile
    };
  };
  
  export default connect(mapStateToProps)(ProfilePage);