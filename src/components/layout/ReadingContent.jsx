import React, { useState } from "react";
import defaultImage from "../../images/defaultAvatar.png";
import EditorJS from 'react-editor-js'
import "./ReadingContent.scss";
import testImage from "../../images/testImage1.jpeg";
import SaveBtn from '../buttons/SaveButton.jsx'
import ImageTool from '@editorjs/image';
import CodeTool from '@editorjs/code';
import Underline from '@editorjs/underline';
import InlineCode from '@editorjs/inline-code';
import Header from '@editorjs/header'
import List from '@editorjs/list';
import defaultAvatar from "../../images/defaultAvatar.png";
import { connect } from 'react-redux'
import moment from 'moment';
import NavBar from './NavBar.jsx'
const editorJsTools = {
  code: CodeTool,
  underline: Underline,
  paragraph: {
      config: {
        placeholder: 'Tell your story...'
      }
  },
  inlineCode: {
      class: InlineCode,
      shortcut: 'CMD+SHIFT+M',
  },
  list: {
      class: List,
      inlineToolbar: true,
  },
  header: Header,
  image: {
      class: ImageTool,
  }
}


const ReadingContent = (props) => {
  const {  post  } = props.location.state;
  let [save, saveToggle] = useState(false);
  return (
    <div>
      <NavBar/>
      <div id="reading-content-container">
      <div id="reading-content-header">
        <SaveBtn save={save} saveToggle={saveToggle}/>
        <div id="author-info">
          <img id="author-ava" src={props.auth.avatar || defaultAvatar} alt="avatar"></img>
          <div id="author-name-date">
            <a href="" id="author-name">{props.auth.displayName}</a>
            <p id="post-date">{moment(post.createdAt).format('MMMM Do, YYYY')}</p>
          </div>
        </div>
      </div>
      <div id="reading-content-preheader">
        <p id="reading-content-title">{post.title}</p>
        <p id="reading-content-subtitle">{post.subtitle}</p>
      </div>
      <img
        className="reading-content-image"
        src={post.titleImage}
        alt="title"
      />
      <div id="reading-content-body">
          <EditorJS 
            id="editorjs" 
            holder="editorjs"
            data={post.postContentData}
            tools={editorJsTools}
            readOnly
          >
            <div id="editorjs" />
          </EditorJS>
      </div>
      </div>
    </div>
    
  );
};


const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth,
  }
}

export default connect(mapStateToProps)(ReadingContent)