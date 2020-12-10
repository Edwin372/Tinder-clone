import React from 'react'
import PostSummary from './PostSummary'
import { Link } from 'react-router-dom'
import './PostList.scss'

const postList = ({posts, style}) => {
  return (
    <div style={{...style}} className="post-list-container">
      { posts && posts.map(post => {
        return (
          <Link to={'/post/' + post.id} key={post.id}>
            <PostSummary post={post} />
          </Link>
        )
      })}  
    </div>
  )
}

export default postList
