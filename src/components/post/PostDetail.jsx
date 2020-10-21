import React from 'react'

function PostDetail(props) {
    const id = props.match.params.id
    return (
        <div>
            <div className="container section post-detail">
               <div className="card z-depth-8">
                  <div className="card-content">
                      <span className="card-title">Post title - {id} </span>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nulla deserunt quas dicta aliquid eligendi atque recusandae odio sit amet veniam, unde placeat neque in ad voluptates aperiam laudantium sunt?</p>
                      <div className="card-action gret lighten-4 grey-text">
                          <div>Posted by me</div>
                          <div>Today</div>
                      </div>
                  </div>
               </div>
            
            </div>
        </div>
    )
}

export default PostDetail
