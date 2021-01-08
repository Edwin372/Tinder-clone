import React from "react";
import likeBtnIcon from "../../svg/likeButton.svg";
import "./Likebutton.scss";
import alreadyLike from "../../svg/alreadyLike.svg";

export default function LikeButton(props) {
  return (
    <div className="like-btn-container">
      <button className="like-btn" onClick={props.onClick}>
        {props.like ? 
          <div className="alreadyLike">
            <img src={alreadyLike} alt="" />
            <span>{props.likeCount + 1}</span> 
          </div> : 
          <div className="likebtn">
            <img src={likeBtnIcon} alt="" />
            <span>{props.likeCount}</span>
          </div>
        }
      </button>
    </div>
  );
}
