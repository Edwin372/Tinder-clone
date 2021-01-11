import React, { Component } from 'react'
import NotificationItem from './NotificationItem.jsx'

export default class NotificationList extends Component {
    render() {
        const {notifications} = this.props
        console.log(notifications)
        return (
            <div id="notification-list-container">
                
               {
                   notifications.map((notification) => {
                       console.log(notification)
                       return <NotificationItem notification/>
                   })
               }
            </div>
        )
    }
}
