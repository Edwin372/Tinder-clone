import React from 'react'
import {Link} from 'react-router-dom'
export default function NotificationItem({notification}) {
    return (
        <div className="notification-item-container">
            <img src={notification.photo || "https://img.icons8.com/color/48/000000/google-alerts.png"} alt="notification"/>
            <div>
                <Link to={notification.link}>{notification.message}</Link>
            </div>
        </div>
    )
}
