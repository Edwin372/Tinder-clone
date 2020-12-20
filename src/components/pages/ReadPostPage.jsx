import React, { Component } from 'react'
import NavBar from '../layout/NavBar.jsx'
import ReadingContent from '../layout/ReadingContent.jsx'
import ComponentBox from '../comments/Commentbox.jsx'

export default class ReadPostPage extends Component {
    render() {
        const {post} = this.props.location.state
        return (
            <div id="read-post-page">
                <NavBar/>
                <ReadingContent post={post}/>
                <ComponentBox style={{zIndex: 10}} contentId={post.id}/>
            </div>
        )
    }
}
