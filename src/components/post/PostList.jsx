import React from "react";
import PostSummary from "./PostSummary";
import { Link } from "react-router-dom";
import "./PostList.scss";
import { firestore } from "../../config/firebaseConfig";

<<<<<<< HEAD
const postList = ({ posts, style, profile, drafts }) => {
  const viewEvent = async (postId, post) => {
    await firestore
      .collection("posts")
      .doc(postId)
      .set({
        ...post,
        view: post.view + 1,
      });
  };
  return (
    <div style={{ ...style }} className="post-list-container">
      {posts &&
        posts.map((post) => {
          return (
            <Link
              to={{
                pathname: "/post/" + post.id,
                state: {
                  post,
                  profile,
                },
              }}
              key={post.id}
              onClick={() => viewEvent(post.id, post)}
            >
              <PostSummary post={post} />
            </Link>
          );
        })}
=======
const postList = ({posts, style, profile, drafts}) => {
  return (
    <div style={{...style}} className="post-list-container">
      { posts && posts.map(post => {
        return (
          <Link to={{
            pathname: '/post/' + post.id,
            state: {
              post,
              profile
            }
            }} key={post.id}>
            <PostSummary post={post} />
          </Link>
        )
      })} 
>>>>>>> 4fc67ed91c78b452a9e5851e55eceb30990615dd
    </div>
  );
};

export default postList;
