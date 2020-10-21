import React, { Component } from 'react'
import Notification from './Notification.jsx'
import PostList from '../post/PostList.jsx'
import {connect} from 'react-redux'

class DashBoard extends Component {
    render() {
        const {posts} = this.props
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                    <PostList posts={posts}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                    <Notification/>

                       
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.post.posts
    }
}

export default connect(mapStateToProps)(DashBoard)