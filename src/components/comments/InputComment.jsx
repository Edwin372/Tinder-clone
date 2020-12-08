import React, { Component} from 'react'
import './InputComment.scss'
import TextareaAutosize from 'react-autosize-textarea'
import commentIcon from '../../svg/commentLogo.svg'
import addImgIcon from '../../svg/addImgaeIcon.svg'
import defaultimg from '../../images/defaultImage.png'


export default function InputComment({user}) {
    return (
        <div className="input-comment">
            <div className="line"></div>
            <div className="comment-logo">
                    <h1 className="comment-text">Comments</h1>
                    <img src={commentIcon} alt="comment-icon"></img>
            </div>
            <div className="input-of-user">
                <div className="ava-and-name">
                    <img src={user.ava} alt="avatar" ></img>
                    <p>{user.name}</p>
                </div>
                <div className="textarea-and-addImageIcon">
                    <TextareaAutosize className="input-text"></TextareaAutosize>
                    <img src={addImgIcon} id="addImageIcon"></img>
                </div>
                <img src={user.inputImage || defaultimg} className="importedImage"></img>
            </div>
        </div>
    )
}
