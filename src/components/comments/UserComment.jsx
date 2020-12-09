import React, { Component} from 'react'
import TextareaAutosize from 'react-autosize-textarea'
import './UserComment.scss'

export default function UserComment(props) {
    return (
        <div className="user-comment">
            <div className="user-name-date">
                <img className="comment-avatar" src={props.avatar} alt="avatar"></img>
                <div className="name-date">
                    <p className="name"> {props.name} </p>
                    <p className="date"> {props.dateComment} </p>
                </div>
            </div>
            <div className="comment-content">
                <div className="text-style">{
                  props.commentContent.split('\n').map((line, index) => <p key={index}>{line}</p>)
                }</div>
            </div>
            {props.commentImage ? <img src = {props.commentImage} className="comment-img"></img>: null}
           
        </div>
    )
}