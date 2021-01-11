import React from "react";
import TrendingPostSummary from "./TrendingPostSummary";
import { Link } from "react-router-dom";
import "./TopTrendingList.scss";
import trendingIcon from "../../svg/trendingIcon.svg";
import { firestore } from "../../config/firebaseConfig";

const topTrendingList = ({ posts, profile }) => {
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
    <div>
      <div className="trending-on-the-nerd">
        <img src={trendingIcon} alt="trending-icon" />
        <label>Trending on The Nerd</label>
      </div>
      <div className="trend-post-list-container">
        {posts &&
          posts.map((post) => {
            return (
              <Link
                to={{
                  pathname: "/post/" + post.id,
                  state: {
                    post,
                  },
                }}
                key={post.id}
                onClick={() => viewEvent(post.id, post)}
              >
                <TrendingPostSummary post={post} />
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default topTrendingList;
