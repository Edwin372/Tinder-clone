import React, { Component } from 'react'
import ProfileHeader from '../post/ProfileHeader.jsx'
import Navbar from '../layout/NavBar.jsx'
import { connect } from "react-redux";
import './ProfilePage.scss'
class ProfilePage extends Component {
    render() {
        return (
            <div id="profile-page">
                <Navbar/>
                <ProfileHeader uid ={this.props.location.pathname.split('/')[2]} profile={this.props.profile}/>
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