import React from 'react'
import TrendingPostSummary from './TrendingPostSummary'
import { Link } from 'react-router-dom'
import './TopTrendingList.scss'
import trendingIcon from '../../svg/trendingIcon.svg'

const topTrendingList = ({posts}) => {
  return (
    <div>
      <div className="trending-on-the-nerd">
        <img src={trendingIcon} alt="trending-icon"/>
        <label>Trending on The Nerd</label>
      </div>
      <div className="trend-post-list-container">
        { posts && posts.map(post => {
          return (
            <Link to={'/post/' + post.id} key={post.id}>
              <TrendingPostSummary post={post} />
            </Link>
          )
        })}  
    </div>
    </div>
  )
}

export default topTrendingList
