import React from 'react'
import PostSummary from './PostSummary.jsx'

export default function ProjectList({posts}) {
    return (
        <div className="project-list section">
           {posts && posts.map((post) => {
               return (
                   <PostSummary id={post.id} post={post}/>
               )
           })}
        </div>
    )
}