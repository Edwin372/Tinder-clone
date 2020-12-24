import React, { useState } from "react";
import "./InputComment.scss";
import TextareaAutosize from "react-autosize-textarea";
import commentIcon from "../../svg/commentLogo.svg";
import addImgIcon from "../../svg/addImgaeIcon.svg";
import defaultAvatar from "../../images/defaultAvatar.png";
import ReactFileReader from "react-file-reader";
import {v4 as uuid} from 'uuid'
import dropDownBtnIcon from '../../svg/dropdown.svg'

export default function InputComment({firebase, user, handlePostNewComment, toggleComment, isCommentShown }) {
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
  async function handleFiles(files) {
    let storage = firebase.storage();
    let storageRef = storage.ref();
    let imagesRef = storageRef.child('images/'+  uuid());
    let uploadTask = await imagesRef.putString(files.base64.split(',')[1], 'base64');
    let downloadURL = await uploadTask.ref.getDownloadURL();
    setImage(downloadURL);
  }
  async function handleDeleteFile(files) {
    let storage = firebase.storage();
    let storageRef = storage.ref();
    let imagesRef = storageRef.child('images/'+  uuid());
    let uploadTask = await imagesRef.putString(files.base64.split(',')[1], 'base64');
    let downloadURL = await uploadTask.ref.getDownloadURL();
    setImage(downloadURL);
  }
  
  return (
    <div className="input-comment">
      <div className="line"></div>
      <div className="comment-logo">
        <div style={{display:'flex'}}>
          <h1 className="comment-text">Comments</h1>
          <img src={commentIcon} alt="comment-icon"></img>
        </div>
        <button id="toggle-btn" className={isCommentShown ? 'down': 'up'} onClick={() =>{toggleComment()}}>
           <img src={dropDownBtnIcon} alt="drop down"/>
        </button>
        
      </div>
      <div className={`input-of-user ${isCommentShown? 'shown': 'hide'}`}>
        <div className="ava-and-name">
          <img
            className="comment-avatar"
            src={user.avatar || defaultAvatar}
            alt="avatar"
          ></img>
          <p>{user.displayName}</p>
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
              <img src={addImgIcon} id="image-btn" alt="button"></img>
            </button>
          </ReactFileReader>
        </div>
        {image ? (
          <img className="preview-img" src={image} alt="preview"/>
        ) : null}
      </div>
    </div>
  );
}
