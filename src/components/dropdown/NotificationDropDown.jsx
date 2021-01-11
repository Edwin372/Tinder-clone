import React, { Component } from "react";
import "./NotificationDropDown.scss";
import bell from "../../svg/bell.svg";
import NotificationItem from "./NotificationItem";
import { Link } from 'react-router-dom'


export default class NotificationDropDown extends Component {
    state={
        viewed: false, 
        notifyCounter: 10,
        isTrigger: false,
    }
  render() {
    return (
        <div className="notify-dropdown-conatin">
            <button className="bell" onClick={() => {this.setState({isTrigger: !this.state.isTrigger, viewed: true})}}> 
                <img src={bell||''} alt="bell icon"/>
                {
                    this.state.viewed?
                    <span></span>
                    :<span id="counter-notify">{this.state.notifyCounter}</span>
                }
            </button>
            <div className={`${this.state.isTrigger ? 'show': 'hide'}`}>
                <span id="notification">Notifications</span>
                <div className="notify-menu">
                { this.props.button && this.props.button.map(box => {
                    return (
                        <Link to={'/box/' + box.id} key={box.id}>
                            <NotificationItem box={box} />
                        </Link>            
                    )
                })}
                </div>
            </div>
        </div>
    );
  }
}
