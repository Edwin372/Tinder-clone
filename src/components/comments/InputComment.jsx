import React, { useState } from "react";
import "./InputComment.scss";
import TextareaAutosize from "react-autosize-textarea";
import commentIcon from "../../svg/commentLogo.svg";
import addImgIcon from "../../svg/addImgaeIcon.svg";
import defaultimg from "../../images/defaultImage.png";
import defaultAvatar from "../../images/defaultAvatar.png";
import ReactFileReader from "react-file-reader";

export default function InputComment({ user, handlePostNewComment }) {
  const [image, setImage] = useState("");
  function handleEnterPress(e, image) {
    let key = window.event.keyCode;
    let isShift = !!window.event.shiftKey;
    if (key === 13 && !isShift && (e.target.value !== "" || image !== "")) {
      e.preventDefault();
      handlePostNewComment(e, image);
      e.target.value = "";
      setImage("");
    }
  }
  function handleFiles(files) {
    console.log(files.base64);
    setImage(files.base64);
  }
  return (
    <div className="input-comment">
      <div className="line"></div>
      <div className="comment-logo">
        <h1 className="comment-text">Comments</h1>
        <img src={commentIcon} alt="comment-icon"></img>
      </div>
      <div className="input-of-user">
        <div className="ava-and-name">
          <img
            className="comment-avatar"
            src={user.avatar || defaultAvatar}
            alt="avatar"
          ></img>
          <p>{user.name}</p>
        </div>
        <div className="textarea-and-addImageIcon">
          <TextareaAutosize
            className="input-text"
            placeholder="Write your comment here ..."
            onKeyPress={(e) => handleEnterPress(e, image)}
          ></TextareaAutosize>
          <ReactFileReader
            fileTypes={[".png", ".jpg", "jpeg"]}
            base64={true}
            handleFiles={handleFiles}
          >
            <button className="btn" id="comment-image-btn">
              <img src={addImgIcon} id="image-btn"></img>
            </button>
          </ReactFileReader>
        </div>
        {image ? (
          <img className="preview-img" src={image} alt="preview-image" />
        ) : null}
      </div>
    </div>
  );
}
