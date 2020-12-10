import React from "react";
import likeBtnIcon from "../../svg/likeButton.svg";
import "./Likebutton.scss";
import alreadyLike from "../../svg/alreadyLike.svg";

export default function LikeButton(props) {
  return (
    <div className="like-btn-container">
      <button className="like-btn" onClick={props.onClick}>
        {props.like ? (
          <img src={alreadyLike} alt="" />
        ) : (
          <img src={likeBtnIcon} alt="" />
        )}
      </button>
      {props.like ? <p>{props.likeCount + 1}</p> : <p>{props.likeCount}</p>}
    </div>
  );
}
