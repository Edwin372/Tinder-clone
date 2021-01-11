import React, { Component } from 'react'
import PostList from './PostList.jsx'
import './PostResultList.scss'

export default class PostResultList extends Component {
    state = {
        showMore: false
    }
    
    render() {
        return (
            <div id="post-result-list">
                <div id ="post-result-title">Posts</div>
                <PostList style={{
                      marginLeft: '0px',
                      maxHeight: `825px`,
                      marginTop: '58.66px',
                      overflow: `${this.state.showMore? 'scroll': 'hidden'}`
                    }} posts={this.props.posts.slice(0,(this.state.showMore ?this.props.posts.length -1: 3))}
                />
                {
                    this.props.posts.length >= 3
                    ?
                    <button 
                        onClick={
                            () => {this.setState({showMore: !this.state.showMore})}
                        } 
                        className="see-more-btn"
                    >
                        <span>{`${this.state.showMore? ` `: `+ ` }`}</span>{
                        `${this.state.showMore? `See less`: `See more` }`}
                    </button>
                    : null
                }
              
            </div>
        )
    }
}
