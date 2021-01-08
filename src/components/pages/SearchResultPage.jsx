import React, { Component } from 'react'
import UserSearchResultList from '../dropdown/UserList.jsx'
import PostSearchResultList from '../post/PostResultList.jsx'
import './SearchResultPage.scss'
import _ from 'lodash'
import Navbar from '../layout/NavBar.jsx'

export default class SearchResultPage extends Component {
    state = {
        posts: this.props.posts || [],
        users: this.props.users || [],
        isInSearchResultsPage: this.props.isInSearchResultsPage || false
    }
    fetchData = (value) => {
       console.log(value)
    }
    render() {
        const {users, posts} = this.state
        return (
            <div id="search-result-page">
                <Navbar debounceSearch={_.debounce(this.fetchData, 500)}/>
                <div id="result-list-container" className="page-container">
                    <UserSearchResultList users={users}/>
                    <PostSearchResultList posts={posts}/>
                </div>
            </div>
        )
    }
}
