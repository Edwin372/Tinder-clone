import React, { useState, useEffect } from "react";
import moment from "moment";
import defaultImage from "../../images/defaultImage.jpg";
import view from "../../svg/view.svg";
import defaultAvatar from "../../images/defaultAvatar.png";
import "./PostSummary.scss";
import SaveBtn from "../buttons/SaveButton.jsx";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

function PostSummary({ post, firestore }) {
  const [save, saveToggle] = useState(false);
  const [authorProfile, setAuthorProfile] = useState({});
  useEffect(() => {
    async function fetchData() {
      const response = await firestore
        .collection("users")
        .doc(post.userId)
        .get();
      const profile = response.data();
      setAuthorProfile(profile);
    }
    fetchData();
  }, []);
  return (
    <div className="post-sum-container">
      <img
        src={post.image || defaultImage}
        alt="cover_image"
        className="post-img"
      />
      <div className="post-sum-content">
        <div className="post-author-container">
          <div className="post-author">
            <img src={authorProfile.avatar || defaultAvatar} alt="avatar" />
            <p className="">{post.author}</p>
          </div>
          <SaveBtn save={save} saveToggle={saveToggle} />
        </div>
        <p className="title">{post.title}</p>
        {post.subtitle ? (
          <p className="subtitle">
            {post.subtitle.length < 120
              ? post.subtitle
              : post.subtitle.slice(0, 120) + "..."}
          </p>
        ) : null}
        <div className="post-info-container">
          <p className="post-date">{moment(post.createdAt).calendar()}</p>
          <div className="view-and-tag-container">
            <div className="view-container">
              <img src={view} alt="view-num" />
              <span>
                {post.view > 1000
                  ? Math.floor(post.view / 1000) + "K"
                  : post.view}
              </span>
            </div>
            <p>
              {post.tags &&
                post.tags.map((tag) => {
                  return tag;
                })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default compose(connect(), firestoreConnect())(PostSummary);
