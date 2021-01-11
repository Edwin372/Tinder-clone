import React from "react";
import likeBtnIcon from "../../svg/likeButton.svg";
import "./Likebutton.scss";
import alreadyLike from "../../svg/alreadyLike.svg";

export default function LikeButton(props) {
  return (
    <div style={{ ...props.likeButtonStyle }} className="like-btn-container">
      <button className="like-btn" onClick={props.onClick}>
        {props.like ? (
          <div className="alreadyLike">
            <img style={{ ...props.imageStyle }} src={alreadyLike} alt="" />
          </div>
        ) : (
          <div className="likebtn">
            <img style={{ ...props.imageStyle }} src={likeBtnIcon} alt="" />
          </div>
        )}
      </button>
      <span style={{ ...props.likeText }} id="like-number">
        {props.likeCount}
      </span>
    </div>
  );
}
