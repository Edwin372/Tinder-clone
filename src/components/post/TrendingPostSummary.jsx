import React, { useState, useEffect } from "react";
import moment from "moment";
import view from "../../svg/view.svg";
import favorite from "../../svg/favorite.svg";
import defaultAvatar from "../../images/defaultAvatar.png";
import "./TrendingPostSummary.scss";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

function TrendingPostSummary({ post, firestore }) {
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
    <div className="trend-post-sum-container">
      <div className="top-trending">
        <span>{post.trending}</span>
      </div>
      <div className="post-sum-content">
        <div className="post-author-container">
          <div className="post-author">
            <img src={authorProfile.avatar || defaultAvatar} alt="avatar" />
            <p className="">{post.author}</p>
          </div>
          <button className="favorite-button">
            <img src={favorite} alt="favourite-icon" />
          </button>
        </div>
        <p className="title">{post.title}</p>
        <p className="subtitle">
          {post.subtitle.length < 120
            ? post.subtitle
            : post.subtitle.slice(0, 120) + "..."}
        </p>
        <div className="post-info-container">
          <p className="post-date">{moment(post.createdAt).calendar()}</p>
          <div className="viewer-container">
            <div className="view-container">
              <img src={view} alt="view-num" />
              <span>
                {post.view > 100000
                  ? Math.floor(post.view / 1000) + "K"
                  : post.view}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default compose(connect(), firestoreConnect())(TrendingPostSummary);
