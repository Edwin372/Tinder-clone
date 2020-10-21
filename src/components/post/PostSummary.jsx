import React from 'react'


export default function PostSummary({post}) {
   return (
        <div className="card z-depth-0 project-summary">
          <div className="card-content grey-text text-darken-3">
               <span className="card-title">{post.title}</span>
              <p>Posted by me</p>
              <p className="grey-text">Today</p>
          </div>
        </div>
   )
}