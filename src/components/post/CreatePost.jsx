import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPost } from '../../store/actions/postAction'
// import { Redirect } from 'react-router-dom'
import './CreatePost.scss'
import EditorJS from '@editorjs/editorjs';
import ImageTool from '@editorjs/image';
import CodeTool from '@editorjs/code';
import Underline from '@editorjs/underline';
import '../buttons/CreatePostBtn.jsx'

class CreatePost extends Component {
    state= {
        
    }
    componentDidMount() {
        const editor = new EditorJS({
            holder: 'editorjs',
            tools: {
                code: CodeTool,
                underline: Underline,
                image: ImageTool,
              },
              
          });
    }
    handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value
      })
    }
    handleSubmit = (e) => {
       e.preventDefault()
       this.props.createPost(this.state)
    }
    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} className="white">
                    <div className="create-signature">
                    <label>Create your own signature</label>
                    </div>
                    <div className="title-field">
                        <label htmlFor="title">Title:</label>
                        <input style={{fontWeight: "bold" } } type="text" id="title" onChange={this.handleChange} />
                    </div>
                    <div className="sub-title">
                        <label htmlFor="subtitle">Subtitle:</label>
                        <div type="text" className ="Subtitle"  contentEditable data-placeholder="Đây là phụ đề" ></div>
                    </div>
                    {/* Content */}
                    <div className="content-field">
                    <label htmlFor="content">Content:</label>
                    <div id="editorjs"></div>
                    </div>
                    <button className="create-post-btn" >POST</button>
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
  
  




