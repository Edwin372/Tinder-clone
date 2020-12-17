import React, { Component } from 'react'
import EditorJS from 'react-editor-js'
import { connect } from 'react-redux'
import { createPost } from '../../store/actions/postAction'
// import { Redirect } from 'react-router-dom'
import './CreatePost.scss'
import ImageTool from '@editorjs/image';
import CodeTool from '@editorjs/code';
import Underline from '@editorjs/underline';
import InlineCode from '@editorjs/inline-code';
import Header from '@editorjs/header'
import List from '@editorjs/list';
import '../buttons/CreatePostBtn.jsx';
import {storage} from '../../config/firebaseConfig.js';



class extendedImageBlock extends ImageTool {
    removed() {
        var deleteRef = storage.refFromURL(this.data.file.url)
        deleteRef.delete().then(function() {
            console.log("Deleted Successful")
          }).catch(function(error) {
            //error occurred!
          });
    }
}

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


class CreatePost extends Component {
    state= {
        editor: {},
    }
    
    handleChange = (e) => {
      this.setState((state) => {
          return {
              [e.target.id]: e.target.value,
          }
      }, () => {
          console.log(this.state)
      })
    }

    handleSubmit = async (e) => {
       const {title, subtitle} = this.state
       e.preventDefault()

       const postContentData = await this.state.editor.save();
       this.props.createPost({title: title || title, subtitle: subtitle || subtitle, postContentData})


    }


    render() {
        return (
            <div id='create-post-container'>
                <form onSubmit={this.handleSubmit} className="create-post-form">
                    <div className="create-signature">
                    <label>Create your own signature</label>
                    </div>
                    <div className="title-field">
                        <input style={{fontWeight: "bold" } } type="text" id="title" placeholder="Title" onChange={this.handleChange} />
                    </div>
                    <div className="sub-title">
                        <input placeholder="Subtitle" type="text" className ="subtitle" id="subtitle" contentEditable data-placeholder="Subtitle" onChange={this.handleChange} />
                    </div>
                    {/* Content */}
                    <div className="content-field">
                    <EditorJS 
                        instanceRef={instance => {this.setState({editor: instance})}} 
                        id="editorjs" 
                        holder="editorjs"
                        tools={editorJsTools}
                    >
                         <div id="editorjs" />
                    </EditorJS>
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
  
  




