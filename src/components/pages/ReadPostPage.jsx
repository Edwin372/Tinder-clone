import React, { Component } from "react";
import NavBar from "../layout/NavBar.jsx";
import ReadingContent from "../layout/ReadingContent.jsx";
import Commentbox from "../comments/Commentbox.jsx";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

export class ReadPostPage extends Component {
  render() {
    const { post } = this.props.location.state;
    return (
      <div id="read-post-page-and-like">
        <div id="read-post-page">
          <NavBar />
          <ReadingContent post={post} />
          <Commentbox style={{ zIndex: 10 }} contentId={post.id} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect()
)(ReadPostPage);
