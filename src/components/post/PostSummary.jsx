import React from 'react'
import moment from 'moment'
import defaultImage from '../../images/defaultImage.jpg'
import view from '../../svg/view.svg'
import favorite from '../../svg/favorite.svg'
import './PostSummary.scss'


export default function PostSummary({post}) {
   return (
        <div className="post-sum-container">
           <img src={defaultImage} alt="default_image" className="post-img"/>
          <div className="post-sum-content">
               <div className="post-author-container">
                    <div className="post-author">
                       <p className="">{post.author}</p>
                    </div>
                   <button className="favorite-button">
                        <img src={favorite} alt="favourite-icon"/>
                   </button>
               </div>
               <p className="title">{post.title}</p>
               <p className="subtitle">{post.subtitle}</p>
               <div className="post-info-container">
                  <p className="post-date">{moment(post.createdAt).calendar()}</p>
                    <div className="view-and-tag-container">
                         <div className="view-container">
                              <img src={view} alt="view-num"/>
                              <span>{post.view}</span>
                         </div>
                         <p>#health</p>
                    </div>
               </div>
          </div>
        </div>
   )
}