import React, { Component } from "react";
import "./NotificationItem.scss";
import defaultAvatar from '../../images/defaultAvatar.png'; 

export default class NotificationItem extends Component {
  render() {
    return (
        <div className="notify-menu-contain">
            <img id="follower" src ={this.props.box.photo||defaultAvatar}/>
            <span className="message">{this.props.box.message}</span>
        </div>
    );
  }
}