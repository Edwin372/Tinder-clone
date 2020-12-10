import React, { Component } from 'react'
import PostList from '../post/PostList.jsx'
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
                  maxHeight: '765px',
                  marginTop: '58.66px',
                  overflow: `${this.state.showMore? 'auto': 'hidden'}`
                  
                }} posts={this.props.posts}/>

               <button onClick={() => {this.setState({showMore: !this.state.showMore})}} className="see-more-btn"><span>+</span> see more</button>
            </div>
        )
    }
}
