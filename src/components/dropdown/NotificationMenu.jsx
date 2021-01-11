import React, { Component } from "react";
import "./NotificationMenu.scss";
import defaultAvatar from '../../images/defaultAvatar.png'; 

export default class NotificationMenu extends Component {
  render() {
    return (
        <div className="notify-menu-contain">
            <img id="follower" src ={this.props.box.photo||defaultAvatar}/>
            <span className="message">{this.props.box.message}</span>
        </div>
    );
  }
}