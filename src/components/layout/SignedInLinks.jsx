import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authAction";
import "./SignedInLinks.scss";
import magnifier from "../../svg/magnifier.svg";
import bell from "../../svg/bell.svg";
import defaultAvatar from "../../images/defaultAvatar.png";

const SignedInLinks = (props) => {
  const handleName = (name) => {
    let finalName = name.split(" ");
    return finalName[finalName.length - 1];
  };
  console.log(props.profile);
  return (
    <div>
      <div className="signedin-container">
        <button id="magnifier" className="signin-navbar-button">
          <img src={magnifier} alt="magnifier icon" />
        </button>
        <button
          id="bell"
          onClick={props.signOut}
          className="signin-navbar-button"
        >
          <img src={bell} alt="bell icon" />
        </button>
        <span id="displayName">{handleName(props.profile.displayName)}</span>
        <button id="avatar-button" className="signin-navbar-button">
          <img
            id="avatar-image"
            src={props.profile.avatar || defaultAvatar}
            alt="avatar-image"
          />
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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);
// export default SignedInLinks
