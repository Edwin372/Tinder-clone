import React, { useState, useEffect } from "react";

import EditorJS from "react-editor-js";
import "./ReadingContent.scss";
import SaveBtn from "../buttons/SaveButton.jsx";
import ImageTool from "@editorjs/image";
import CodeTool from "@editorjs/code";
import Underline from "@editorjs/underline";
import InlineCode from "@editorjs/inline-code";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import defaultAvatar from "../../images/defaultAvatar.png";
import { connect } from "react-redux";
import moment from "moment";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import LikeButton from "../buttons/Likebutton.jsx";

const editorJsTools = {
  code: CodeTool,
  underline: Underline,
  paragraph: {
    config: {
      placeholder: "Tell your story...",
    },
  },
  inlineCode: {
    class: InlineCode,
    shortcut: "CMD+SHIFT+M",
  },
  list: {
    class: List,
    inlineToolbar: true,
  },
  header: Header,
  image: {
    class: ImageTool,
  },
};

const ReadingContent = (props) => {
  const { post, firestore } = props;
  const [save, saveToggle] = useState(false);
  const [authorProfile, setAuthorProfile] = useState({});
  const [likedId, setLikedId] = useState("");
  const [likeCount, setLikeCount] = useState(0);
  useEffect(() => {
    const { post } = props;

    async function fetchData() {
      const response = await firestore
        .collection("users")
        .doc(post.userId)
        .get();
      const profile = { ...response.data(), id: response.id };
      setAuthorProfile(profile);
      await firestore
        .collection("posts")
        .doc(props.post.id)
        .onSnapshot((querySnapshot) => {
          var post = [];
          setLikeCount(querySnapshot.data() && querySnapshot.data().likes);
        });
    }
    fetchLike(post.id);
    fetchData();
  }, []);
  const increaseLike = async (postId, post) => {
    const newLikeCount = likeCount + 1;
    await firestore
      .collection("posts")
      .doc(postId)
      .set({
        ...post,
        likes: newLikeCount,
      });
  };
  const decreaseLike = async (postId, post) => {
    const newLikeCount = likeCount - 1;

    await firestore
      .collection("posts")
      .doc(postId)
      .set({
        ...post,
        likes: newLikeCount,
      });
  };
  const handleLike = async (postId, post) => {
    await firestore
      .collection("likes")
      .add({ userId: props.auth.uid, contentId: postId })
      .then((data) => {
        setLikedId(data.id);
        increaseLike(postId, post);
      });
  };
  const handleUnlike = async (likedId, postId, post) => {
    await firestore
      .collection("likes")
      .doc(likedId)
      .delete()
      .then((data) => {
        setLikedId("");
        decreaseLike(postId, post);
      });
  };
  const fetchLike = async (postId) => {
    const { firestore } = props;
    var rawData = await firestore
      .collection("likes")
      .where("userId", "==", props.auth.uid)
      .where("contentId", "==", postId)
      .get();
    rawData.forEach((data) => {
      setLikedId(data.id);
    });
  };
  return (
    <div id="reading-content-and-like">
      <LikeButton
        id="like-button"
        like={likedId ? true : false}
        likeCount={likeCount}
        onClick={() => {
          likedId
            ? handleUnlike(likedId, post.id, post)
            : handleLike(post.id, post);
        }}
        imageStyle={{
          width: "50px",
          height: "auto",
        }}
        likeButtonStyle={{
          position: "fixed",
          top: "400px",
          right: "200px",
        }}
        likeText={{
          fontSize: "40px",
          marginTop: "18px",
        }}
      />
      <div id="reading-content-container">
        <div id="reading-content-header">
          <SaveBtn save={save} saveToggle={saveToggle} />
          <div id="author-info">
            <img
              id="author-ava"
              src={authorProfile.avatar || defaultAvatar}
              alt="avatar"
            ></img>
            <div id="author-name-date">
              <a href={`/profile/${authorProfile.id}`} id="author-name">
                {post.author}
              </a>
              <p id="post-date">
                {moment(post.createdAt).format("MMMM Do, YYYY")}
              </p>
            </div>
          </div>
        </div>
        <div id="reading-content-preheader">
          <p id="reading-content-title">{post.title}</p>
          <p id="reading-content-subtitle">{post.subtitle}</p>
        </div>
        {post.titleImage ? (
          <img
            className="reading-content-image"
            src={post.titleImage}
            alt="title"
          />
        ) : null}
        <div id="reading-content-body">
          <EditorJS
            id="editorjs"
            holder="editorjs"
            data={post.postContentData}
            tools={editorJsTools}
            readOnly
          >
            <div id="editorjs" />
          </EditorJS>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect()
)(ReadingContent);
