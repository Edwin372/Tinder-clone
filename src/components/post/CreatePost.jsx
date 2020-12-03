import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPost } from '../../store/actions/postAction'
import '../buttons/CreatePostBtn.jsx'
import './CreatePost.scss'
import EditorJS from '@editorjs/editorjs';
import ImageTool from '@editorjs/image';

class CreatePost extends Component {
    state= {
        
    }
    componentDidMount() {
        const editor = new EditorJS({
            holder: 'editorjs',
            tools: {
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
    // textAreaAdjust() {
    //     document.getElementById("content").style.height = "1px";
    //     document.getElementById("content").style.height =(20+document.getElementById("content").scrollHeight)+"px";
    //   }
    
    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} className="white">
                    <div className="create-signature">
                    <label>Create your own signature</label>
                    </div>
                    <div className="title-field">
                        <label htmlFor="title">Title</label>
                        <textarea  rows="1" cols="83" type="text" id="title" onChange={this.handleChange} />
                    </div>
                    <div className="sub-title">
                        <label htmlFor="subtitle">Subtitle:</label>
                        <textarea  type="text" id ="Subtitle" rows="1" cols="110" onChange={this.handleChange} placeholder ="day la phu de"/>
                    </div>
                    {/* Content */}
                    <label htmlFor="content">Content:</label>
                    <div id="editorjs"></div>
                    <hr></hr>
                    
                    
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
  