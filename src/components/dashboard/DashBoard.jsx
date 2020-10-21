import React, { Component } from 'react'
import Notification from './Notification.jsx'
import PostList from '../post/PostList.jsx'

export default class DashBoard extends Component {
    render() {
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6"></div>
                    <div className="col s12 m5">
                    <Notification/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                    <PostList/>
                       
                    </div>
                </div>
            </div>
        )
    }
}