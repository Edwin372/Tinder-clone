import React, { Component } from 'react'
import NavBar from '../layout/NavBar.jsx'
import CreatePost from '../post/CreatePost.jsx'
import './CreatePostPage.scss'
export default class CreatePostPage extends Component {
    render() {
        
        const {state} = this.props.location
        if(state) {
            return (
                <div id="create-post-page-container">
                    <NavBar/>
                    <CreatePost title={state.draft.title} subtitle={state.draft.subtitle} draft={state.draft || null}/>
                </div>
            )
        }
        return (
            <div id="create-post-page-container">
                <NavBar/>
                <CreatePost/>
            </div>
        )
       
    }
}
