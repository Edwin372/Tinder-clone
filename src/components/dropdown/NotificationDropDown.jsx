import React, { Component } from "react";
import "./NotificationDropDown.scss";
import bell from "../../svg/bell.svg";
import NotificationItem from "./NotificationItem";
import { Link } from "react-router-dom";

export default class NotificationDropDown extends Component {
  state = {
    viewed: false,
    isTrigger: false,
  };
  render() {
    return (
      <div className="notify-dropdown-contain">
        <button
          className="bell"
          onClick={() => {
            this.setState({
              isTrigger: !this.state.isTrigger,
              viewed: true,
            });
          }}
        >
          <img src={bell || ""} alt="bell icon" />
          {this.state.viewed ? (
            <span></span>
          ) : (
            <span id="counter-notify">{this.props.notificationCounter}</span>
          )}
        </button>
        <div className={`${this.state.isTrigger ? "show" : "hide"}`}>
          <span id="notification">Notifications</span>
          <div className="notify-menu">
            {this.props.notifyContent &&
              this.props.notifyContent.map((box) => {
                return (
                  <Link to={"/box/" + box.id} key={box.id}>
                    <NotificationItem box={box} />
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}
