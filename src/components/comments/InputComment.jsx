import React, { Component} from 'react'
import './InputComment.scss'
import TextareaAutosize from 'react-autosize-textarea'
import commentIcon from '../../svg/commentLogo.svg'
import userEvent from '@testing-library/user-event'

const InputComment = ({user}) => {
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
                <TextareaAutosize className="input-text"></TextareaAutosize>
            </div>
        </div>
    )
}