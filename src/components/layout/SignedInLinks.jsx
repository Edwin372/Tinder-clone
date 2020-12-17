import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authAction";
import "./SignedInLinks.scss";
import bell from "../../svg/bell.svg";
import defaultAvatar from "../../images/defaultAvatar.png";
import pencil from "../../svg/pencil.svg";
import layers from "../../svg/layers.svg";
import signoutIcon from "../../svg/signoutIcon.svg";
import humanLogo from "../../svg/humanLogo.svg";
import SearchInput from '../search/SearchInput.jsx'
// import {NavLink} from 

const SignedInLinks = (props) => {
  let [boolDropDown, setBoolDropDown] = useState(false);
  const handleName = (name) => {
    let finalName = name.split(" ");
    return finalName[finalName.length - 1];
  };
  console.log(props.profile);
  return (
    <div>
      <div className="signedin-container">
        <SearchInput/>
        <button
          id="bell"
         
          className="signin-navbar-button"
        >
          <img src={bell} alt="bell icon" />
        </button>
        {/* <span id="displayName">{handleName(props.auth.displayName)}</span> */}
        <button
          id="avatar-button"
          className="signin-navbar-button"
          onClick={() => setBoolDropDown(!boolDropDown)}
        >
          <div>
            <img
              id="avatar-image"
              src={props.auth.avatar || defaultAvatar}
              alt="avatar"
              className="dropdown-logo"
            />
            <div
              id="dropdown-grid"
              className={`dropdown-container ${
                boolDropDown ? "visible" : "hidden"
              }`}
            >
              <button className="dropdown-button" onClick={() => {}}>
                <img
                  id="pencil-image"
                  src={pencil}
                  alt="pencil-logo"
                  className="dropdown-logo"
                />
                Writing
              </button>
              <button className="dropdown-button">
                <img
                  id="layers-image"
                  src={layers}
                  alt="layers-logo"
                  className="dropdown-logo"
                />
                Series
              </button>
              <button className="dropdown-button">
                <img
                  id="humanLogo-image"
                  src={humanLogo}
                  alt="humanLogo-logo"
                  className="dropdown-logo"
                />
                View profile
              </button>
              <button id="sign-out-button" className="dropdown-button"  onClick={props.signOut}>
                <img
                  id="signout-image"
                  src={signoutIcon}
                  alt="signoutIcon-logo"
                  className="dropdown-logo"
                 
                />
                Sign out
              </button>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);
// export default SignedInLinks
