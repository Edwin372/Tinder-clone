import React, { Component} from 'react'
import './Commentbox.scss'
import TextareaAutosize from 'react-autosize-textarea'
import commentIcon from '../../svg/commentLogo.svg'
import userAvatar from '../../images/testImage5.jpg'


export default class CreateCommment extends Component {
    state ={

    }
    handleChangee = (e) => {
        this.setState({
            [e.target.userId]: e.target.value
        })
    }
    render() {
        return(
            <div id="comment-area">
                <div id="line"></div>
                <div id="comment-logo">
                    <h1 id="comment-text">COMMENTS</h1>
                    <img src={commentIcon} id="img1"></img>
                </div>
                <div id="input-comment-area">
                    <img src={userAvatar} id="img2"></img>
                    <div id="name-and-comment-box">
                        <p>Commenter's name</p>
                        <TextareaAutosize placeholder='try writing some lines'></TextareaAutosize>
                    </div>
                </div>
                <div id="user-comment"></div>
            </div>
        )
    }
}
