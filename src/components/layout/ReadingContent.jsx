import React, { useState } from "react";
import defaultImage from "../../images/defaultAvatar.png";
import "./ReadingContent.scss";
import testImage from "../../images/testImage1.jpeg";
import SaveBtn from '../buttons/SaveButton.jsx'


const ReadingContent = (props) => {
  const { profile, post } = props;
  let [save, saveToggle] = useState(false);
  return (
    <div id="reading-content-container">
      <div id="reading-content-header">
        <SaveBtn save={save} saveToggle={saveToggle}/>
        <div id="author-info">
          <img id="author-ava" src={profile.avatar}></img>
          <div id="author-name-date">
            <a id="author-name">{profile.displayName}</a>
            <p id="post-date">{post.postDate}</p>
          </div>
        </div>
      </div>
      <div id="reading-content-preheader">
        <p id="reading-content-title">{post.title}</p>
        <p id="reading-content-subtitle">{post.subtitle}</p>
      </div>
      <img
        className="reading-content-image"
        src={post.image}
        alt="title-image"
      />
      <div id="reading-content-body">
        {post.contents.map((item, index) => (
          <div key={index}>
            <p className="reading-content-body-title" key={index}>
              {item.title}
            </p>
            {item.content.map((pItem, index) => {
              if (typeof pItem === `string`) {
                return (
                  <p className="reading-content-body-paragraph" key={index}>
                    {pItem}
                  </p>
                );
              } else {
                return (
                  <img
                    className="reading-content-image paragraph-image"
                    src={pItem.img}
                    alt="paragraph-image"
                  />
                );
              }
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadingContent;