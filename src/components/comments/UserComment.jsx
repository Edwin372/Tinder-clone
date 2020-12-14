import React, { useState } from "react";
import TextareaAutosize from "react-autosize-textarea";
import "./UserComment.scss";
import likeBtnIcon from "../../svg/likeButton.svg";
import Dotdotdot from "../../svg/dotdotdot.svg";
import LikeButton from "../buttons/Likebutton.jsx";
import DropDownOption from "../buttons/DropDownOption.jsx";

export default function UserComment(props) {
  const [haveLiked, likeAction] = useState(false);
  return (
    <div className="user-comment">
      <div className="user-name-date">
        <img className="comment-avatar" src={props.avatar} alt="avatar"></img>
        <div className="name-date">
          <p className="name"> {props.name} </p>
          <p className="date"> {props.dateComment} </p>
        </div>
      </div>
      <div className="comment-content-container">
        <div className="content-and-edit">
          <div className="user-comment-image">
            {props.commentContent ? (
              <div className="comment-content">
                {props.commentContent.split("\n").map((line, index) => (
                  <p className="text-style" key={index}>
                    {line}
                  </p>
                ))}
              </div>
            ) : null}
            {props.commentImage ? (
              <img src={props.commentImage} className="comment-img"></img>
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
          likeCount={50}
          like={haveLiked}
          onClick={() => likeAction(!haveLiked)}
        />
      </div>
    </div>
  );
}
