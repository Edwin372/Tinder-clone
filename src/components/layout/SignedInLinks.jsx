import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authAction";
import "./SignedInLinks.scss";
import magnifier from "../../svg/magnifier.svg";
import bell from "../../svg/bell.svg";
import defaultAvatar from "../../images/defaultAvatar.png";
import Pencil from "../../svg/pencil.svg";
import Layers from "../../svg/layers.svg";
import SignoutIcon from "../../svg/signoutIcon.svg";
import HumanLogo from "../../svg/humanLogo.svg";

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
        <button
          id="avatar-button"
          className="signin-navbar-button"
          onClick={() => setBoolDropDown(!boolDropDown)}
        >
          <div>
            <img
              id="avatar-image"
              src={props.profile.avatar || defaultAvatar}
              alt="avatar-image"
              className="dropdown-logo"
            />
            <div
              id="dropdown-grid"
              className={`dropdown-container ${
                boolDropDown ? "visible" : "hidden"
              }`}
            >
              <button className="dropdown-button">
                <img
                  id="pencil-image"
                  src={Pencil}
                  alt="pencil-logo"
                  className="dropdown-logo"
                />
                Writing
              </button>
              <button className="dropdown-button">
                <img
                  id="layers-image"
                  src={Layers}
                  alt="layers-logo"
                  className="dropdown-logo"
                />
                Series
              </button>
              <button className="dropdown-button">
                <img
                  id="humanLogo-image"
                  src={HumanLogo}
                  alt="humanLogo-logo"
                  className="dropdown-logo"
                />
                View profile
              </button>
              <button id="sign-out-button" className="dropdown-button">
                <img
                  id="signout-image"
                  src={SignoutIcon}
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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);
// export default SignedInLinks
