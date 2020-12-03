import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPost } from '../../store/actions/postAction'
import '../buttons/CreatePostBtn.jsx'
import './CreatePost.scss'


class CreatePost extends Component {
    state= {
        
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
                    <h5 className="grey-text text-darken-3">Create your own signature</h5>
                    <div className="title-field">
                        <label htmlFor="title">Title</label>
                        <textarea  rows="1" cols="83" type="text" id="title" onChange={this.handleChange} />
                    </div>
                    <div className="sub-title">
                        <label htmlFor="subtitle">Subtitle:</label>
                        <textarea  type="text" id ="Subtitle" rows="1" cols="110" onChange={this.handleChange} placeholder ="day la phu de"/>
                    </div>
                    <div className="content-field">
                        <label htmlFor="content">Post content</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange} ></textarea>
                    </div>
                </form>    
                <button className="create-post-btn" >POST</button>
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
  