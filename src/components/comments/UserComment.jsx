import React, { Component} from 'react'
import TextareaAutosize from 'react-autosize-textarea'
import './UserComment.scss'

export default function UserComment({user}) {
    return (
        <div className="user-comment">
            <div className="user-name-date">
                <img src={user.ava} alt="avatar"></img>
                <div className="name-date">
                    <p className="name"> {user.name} </p>
                    <p className="date"> {user.dateComment} </p>
                </div>
            </div>
            <div className="comment-content">
                <p className="text-style">{user.commentContent}</p>
            </div>
            <img src = {user.commentImage} className="comment-img"></img>
        </div>
    )
}