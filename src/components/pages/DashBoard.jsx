import React, { Component } from "react";
import PostList from "../post/PostList";
// import Notifications from './Notification'
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import Navbar from "../layout/NavBar.jsx";
import quote from "../../svg/quote.svg";
import TopTrendingList from "../post/TopTrendingList.jsx";
import testImage5 from "../../images/testImage5.jpg";
import TagDropDown from "../dropdown/TagDropDown.jsx";
import { messaging } from "../../config/firebaseConfig";
import "./DashBoard.scss";
import { sortBy } from "lodash";
class Dashboard extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    this.setState({ posts: [] });
    messaging
      .requestPermission()
      .then(async function () {
        const token = await messaging.getToken();
      })
      .catch(function (err) {
        console.log("Unable to get permission to notify.", err);
      });
    navigator.serviceWorker.addEventListener("message", (message) =>
      console.log(message)
    );
  }

  fetchData = async (selectedOptions) => {
    if (selectedOptions && selectedOptions.length !== 0) {
      console.log(selectedOptions);
      let filterArr = selectedOptions.map((tag) => tag.label);
      const { firestore } = this.props;
      var posts = await firestore
        .collection("posts")
        .orderBy("createdAt", "desc")
        .where("tags", "array-contains-any", filterArr)
        .get();
      let filteredPosts = posts.docs.map((post) => ({
        ...post.data(),
        id: post.id,
      }));
      this.setState({ posts: filteredPosts });
    } else {
      this.setState({ posts: [] });
    }
  };

  render() {
    const { posts } = this.state;
    console.log(this.props.posts);
    return (
      <div id="home">
        <Navbar />
        <div id="dashboard-container" className="page-container">
          <div id="quote-container">
            <img src={quote} alt="quote" />
          </div>
          <div id="posts-section">
            <TopTrendingList
              posts={
                this.props.posts &&
                this.props.posts
                  .slice()
                  .sort(function (a, b) {
                    return b.likes - a.likes;
                  })
                  .sort(function (a, b) {
                    return b.view - a.view;
                  })
                  .splice(0, 8)
              }
            />
            <div id="post-list-section">
              <PostList posts={posts.length ? posts : this.props.posts} />
              <TagDropDown
                handleChange={(selectedOptions) => {
                  this.fetchData(selectedOptions);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.firestore.ordered.posts,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "posts", orderBy: ["createdAt", "desc"] }])
)(Dashboard);
