import React from 'react'
import ProfilePost from './ProfilePost'
import { Link } from 'react-router-dom'
import './Posts.scss'

const postList = ({posts}) => {
  return (
    <div className="posts-container">
      { posts && posts.map(post => {
        return (
            <ProfilePost post={post} />
        )
      })}  
    </div>
  )
}

export default postList
