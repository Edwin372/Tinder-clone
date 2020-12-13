import React, { Component } from 'react'
import PostList from '../post/PostList'
// import Notifications from './Notification'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import Navbar from '../layout/NavBar.jsx'
import quote from '../../svg/quote.svg'
import './DashBoard.scss'


class Dashboard extends Component {
  render() {
    const { posts } = this.props;

    return (
      <div id="home">
        <Navbar/>
        <div id="dashboard-container" className="page-container">
          <div id="quote-container">
              <img src={quote} alt="quote"/>
          </div>
          <div className="row">
              <PostList posts={posts} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.firestore.ordered.posts,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'posts' }
  ])
)(Dashboard)
