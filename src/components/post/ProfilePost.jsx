import React, { Component } from "react";
import moment from 'moment'
import './ProfilePost.scss'
import view from '../../svg/view.svg'
import LikeButton from '../buttons/Likebutton.jsx'
import ReadingContent from '../layout/ReadingContent.jsx'
import ComponentBox from '../comments/Commentbox.jsx'
import DropDownOption from "../buttons/DropDownOption.jsx";
import close from '../../svg/close.svg'

export default class ProfilePost extends Component {
    state = {
        haveLiked: false,
        viewOnDetail: false
    }
    render() {
        return (
                <div className={`${this.state.viewOnDetail ? 'detail': 'general'}`}>
                    {
                        !this.state.viewOnDetail ?
                            <div className="post-container">
                                <div className="profile-post" onClick={() => {this.setState({viewOnDetail: !this.state.viewOnDetail})}}>
                                    <p className="title-profile-post">{this.props.post.title}</p>
                                    <p className="subtitle-profile-post">{this.props.post.subtitle}</p>
                                    <div className="profile-post-info">
                                        <p className="profile-post-date">{moment(this.props.post.createdAt).calendar()}</p>
                                            <div className="profile-post-viewer">
                                                <div className="view">
                                                    <img src={view} alt="view-num"/>
                                                    <span>{(this.props.post.view > 100000) ? (Math.floor(this.props.post.view/1000)) + 'K' : this.props.post.view}</span>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                                <LikeButton
                                    likeCount={this.props.post.like}
                                    like={this.state.haveLiked}
                                    onClick={() => {this.setState({haveLiked: !this.state.haveLiked})}}
                                />
                            </div>
                        :
                        <div className="post-detail-container">
                            <div className="post-detail">
                                <ReadingContent post={this.props.post}/>
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
                                <div className="tools-btn">
                                    <LikeButton
                                        likeCount={this.props.post.like}
                                        like={this.state.haveLiked}
                                        onClick={() => {this.setState({haveLiked: !this.state.haveLiked})}}
                                    />
                                     <button className="close-btn" onClick={() => {this.setState({viewOnDetail: !this.state.viewOnDetail})}}>
                                        <img className="close-img" src={close} alt="close-icon"/>
                                    </button>
                                </div>
                            </div>
                            <ComponentBox style={{zIndex: 10}} contentId={this.props.post.id}/>
                        </div>
                    }
                </div>
           
        )
    }
}
