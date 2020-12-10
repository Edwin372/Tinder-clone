import React from 'react'
import PostSummary from './PostSummary'
import { Link } from 'react-router-dom'
import './PostList.scss'

const postList = ({posts, style}) => {
  return (
    <div>
    <div> People</div>
    <div className="post-list-container">
      { posts && posts.map(post => {
        return (
          <Link to={'/post/' + post.id} key={post.id}>
            <PostSummary post={post} />
          </Link>
        )
      })}  
    </div>
    <button>+See more</button>
    </div>
  )
}

export default postList
