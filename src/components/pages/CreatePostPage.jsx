import React, { Component } from 'react'
import NavBar from '../layout/NavBar.jsx'
import CreatePost from '../post/CreatePost.jsx'
import './CreatePostPage.scss'
export default class CreatePostPage extends Component {
    render() {
        return (
            <div id="create-post-page-container">
                <NavBar/>
                <CreatePost/>
            </div>
        )
    }
}
