import React, { Component } from "react";
import "./UserComment.scss";
import LikeButton from "../buttons/Likebutton.jsx";
import DropDownOption from "../buttons/DropDownOption.jsx";
import { firestore } from "../../config/firebaseConfig";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

class UserComment extends Component {
  state = {
    likedId: "",
  };
  increaseLike = async (commentId) => {
    await firestore
      .collection("comments")
      .doc(commentId)
      .set({
        ...this.props.comment,
        likes: this.props.comment.likes + 1,
      });
  };
  decreaseLike = async (commentId) => {
    await firestore
      .collection("comments")
      .doc(commentId)
      .set({
        ...this.props.comment,
        likes: this.props.comment.likes - 1,
      });
  };
  handleLike = async (commentId, instance) => {
    await firestore
      .collection("likes")
      .add({ userId: this.props.auth.uid, contentId: commentId })
      .then((data) => {
        instance.setState({ likedId: data.id });
        this.increaseLike(commentId);
      });
  };
  handleUnlike = async (likedId, commentId, instance) => {
    await firestore
      .collection("likes")
      .doc(likedId)
      .delete()
      .then((data) => {
        instance.setState({ likedId: "" });
        this.decreaseLike(commentId);
      });
  };
  componentWillMount = () => {
    this.fetchLike();
  };
  fetchLike = async () => {
    const { firestore } = this.props;
    var rawData = await firestore
      .collection("likes")
      .where("userId", "==", this.props.auth.uid)
      .where("contentId", "==", this.props.id)
      .get();
    rawData.forEach((data) => {
      this.setState({ likedId: data.id });
    });
  };
  render() {
    const { likedId } = this.state;
    return (
      <div className="user-comment">
        <div className="user-name-date">
          <img
            className="comment-avatar"
            src={this.props.avatar}
            alt="avatar"
          ></img>
          <div className="name-date">
            <p className="name"> {this.props.name} </p>
            <p className="date"> {this.props.createdAt} </p>
          </div>
        </div>
        <div className="comment-content-container">
          <div className="content-and-edit">
            <div className="user-comment-image">
              {this.props.commentContent ? (
                <div className="comment-content">
                  {this.props.commentContent.split("\n").map((line, index) => (
                    <p className="text-style" key={index}>
                      {line}
                    </p>
                  ))}
                </div>
              ) : null}
              {this.props.commentImage ? (
                <img
                  src={this.props.commentImage}
                  className="comment-img"
                  alt="comment"
                ></img>
              ) : null}
            </div>
            <div className="hide">
              <DropDownOption
                buttons={[
                  {
                    name: "Delete",
                    handleClick: () => {
                      console.log("Delete");
                    },
                  },
                  {
                    name: "Edit",
                    handleClick: () => {
                      console.log("Edit");
                    },
                  },
                ]}
              />
            </div>
          </div>
          <LikeButton
            like={likedId ? true : false}
            likeCount={this.props.likes}
            onClick={() => {
              likedId
                ? this.handleUnlike(likedId, this.props.id, this)
                : this.handleLike(this.props.id, this);
            }}
          />
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
)(UserComment);
