import React, { Component} from 'react'
import './Commentbox.scss'
import TextareaAutosize from 'react-autosize-textarea'
import commentIcon from '../../svg/commentLogo.svg'
import userAvatar from '../../images/testImage5.jpg'
import importImage from '../../images/defaultImage.jpg'
import addImageIcon from '../../svg/addImgaeIcon.svg'
import avatar from '../../svg/avatar.svg'


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
                    <h1 id="comment-text">Comments</h1>
                    <img src={commentIcon} id="img1"></img>
                </div>
                <div id="input-comment-area">
                    <img src={avatar} id="img2"></img>
                    <div id="name-and-comment-box">
                        <p>Commenter's name</p>
                        <div id="box-and-addImage">
                            <TextareaAutosize id="text-area"></TextareaAutosize>
                            <img src={addImageIcon} id="img3"></img>
                        </div>
                        {/* <img src={importImage} id="img4"></img> */}
                    </div>
                </div>
                <div id="user-comment">
                    <img src={avatar} id="img5"></img>
                    <div id="info">
                        <p id="name">Người lạ ơi</p>
                        <p id="date">July 16th, 2019</p>
                        <p id="comment-content">Bài này hay thật</p>
                    </div>
                </div>
            </div>
        )
    }
}
