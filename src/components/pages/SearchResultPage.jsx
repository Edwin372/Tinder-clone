import React, { Component } from 'react'
import UserSearchResultList from '../dropdown/UserList.jsx'
import PostSearchResultList from '../post/PostResultList.jsx'
import './SearchResultPage.scss'
import Navbar from '../layout/NavBar.jsx'

export default class SearchResultPage extends Component {
    state = {
        posts: this.props.posts || [],
        users: this.props.users || []
    }
    render() {
        const {users, posts} = this.state
        return (
            <div id="search-result-page">
                <Navbar auth={{uid: '12313'}} profile={{displayName: 'hello'}}/>
                <div id="result-list-container" className="page-container">
                    <UserSearchResultList users={users}/>
                    <PostSearchResultList posts={posts}/>
                </div>
                
            </div>
        )
    }
}
