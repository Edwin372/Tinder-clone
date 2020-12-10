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
                  maxHeight: `${this.state.showMore? 'fit-content': '765px'}`,
                  marginTop: '58.66px',
                  overflow: 'hidden'
                }} posts={this.props.posts}/>

               <button onClick={() => {this.setState({showMore: !this.state.showMore}, ()=> {console.log(this.state.showMore)})}} className="see-more-btn"><span>{`${this.state.showMore? ` `: `+ ` }`}</span>{`${this.state.showMore? `See less`: `See more` }`}</button>
            </div>
        )
    }
}
