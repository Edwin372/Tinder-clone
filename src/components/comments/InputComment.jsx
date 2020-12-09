import React, { Component} from 'react'
import './InputComment.scss'
import TextareaAutosize from 'react-autosize-textarea'
import commentIcon from '../../svg/commentLogo.svg'
import addImgIcon from '../../svg/addImgaeIcon.svg'
import defaultimg from '../../images/defaultImage.png'
import defaultAvatar from '../../images/defaultAvatar.png'


export default function InputComment({user, handlePostNewComment}) {
    function handleEnterPress(e) {
        let key = window.event.keyCode;
        let isShift = !!window.event.shiftKey;
        
        if (key === 13 && !isShift && e.target.value !== '') {
            e.preventDefault();
            handlePostNewComment(e);
            e.target.value = ''
        }
       
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
                    <img className="comment-avatar" src={user.avatar || defaultAvatar} alt="avatar" ></img>
                    <p>{user.name}</p>
                </div>
                <div className="textarea-and-addImageIcon">
                    <TextareaAutosize className="input-text" placeholder="Write your comment here ..." onKeyPress={(e) => handleEnterPress(e)}></TextareaAutosize>
                    <button id ="comment-image-btn">
                        <img src={addImgIcon} id="image-btn"></img>
                    </button> 
                 
                </div>
            </div>
        </div>
    )
}
