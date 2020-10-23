import React from 'react'
import moment from 'moment'


export default function PostSummary({post}) {
   return (
        <div className="card z-depth-0 post-summary">
          <div className="card-content grey-text text-darken-3">
               <span className="card-title">{post.title}</span>
               <p>Posted by {post.author}</p>
               <p className="grey-text">{moment(post.createdAt).calendar()}</p>
          </div>
        </div>
   )
}