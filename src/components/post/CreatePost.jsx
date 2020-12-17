import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPost } from '../../store/actions/postAction'
// import { Redirect } from 'react-router-dom'
import './CreatePost.scss'
import EditorJS from '@editorjs/editorjs';
import ImageTool from '@editorjs/image';
import CodeTool from '@editorjs/code';
import Underline from '@editorjs/underline';
import '../buttons/CreatePostBtn.jsx';
import {storage} from '../../config/firebaseConfig.js';

class extendedImageBlock extends ImageTool {
    removed() {
        console.log('removed');
    }
}

class CreatePost extends Component {
    state= {
        editor: {}
    }
    componentDidMount() {
        var editor = new EditorJS({
            holder: 'editorjs',
            tools: {
                code: CodeTool,
                underline: Underline,
                image: {
                    class: extendedImageBlock,
                    config: {
                        uploader: {
                            async uploadByFile(file) {
                                var storageRef = storage.ref();
                                var imagesRef = storageRef.child('EditorJS').child('images/'+ file.name);
                                var metadata = {
                                    contentType: 'image/jpeg'
                                };
                                var uploadTask = await imagesRef.put(file, metadata);
                                console.log("Uploaded successfully!", uploadTask);
                                const downloadURL = await uploadTask.ref.getDownloadURL();
                                console.log(downloadURL);
                                return {
                                    success: 1,
                                    file: {
                                        url: downloadURL
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
       
    }
    
    handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value,
      }, () => {
          console.log(this.state)
      })
    }
    handleSubmit = (e) => {
       e.preventDefault()
       this.props.createPost(this.state)
    }
    render() {
        return (
            <div id='create-post-container'>
                <form onSubmit={this.handleSubmit} className="create-post-form">
                    <div className="create-signature">
                    <label>Create your own signature</label>
                    </div>
                    <div className="title-field">
                        <label htmlFor="title">Title:</label>
                        <input style={{fontWeight: "bold" } } type="text" id="title" placeholder="Title" onChange={this.handleChange} />
                    </div>
                    <div className="sub-title">
                        <label htmlFor="subtitle">Subtitle:</label>
                        <input type="text" className ="subtitle" id="subtitle" contentEditable data-placeholder="Subtitle" onChange={this.handleChange} />
                    </div>
                    {/* Content */}
                    <div className="content-field">
                    <label htmlFor="content">Content:</label>
                    <div id="editorjs"></div>
                    </div>
                    <button className="create-post-btn">POST</button>
                    {/* <div className="input-field">
                        <button  className="btn pink lighten-1 z-depth-0">Publish</button>
                    </div> */}
                </form>    
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//       auth: state.firebase.auth
//     }
//   }
const mapDispatchToProps = dispatch => {
    return {
      createPost: (post) => dispatch(createPost(post))
    }
  }
  
  export default connect(null, mapDispatchToProps)(CreatePost)
  
  




