import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPost } from '../../store/actions/postAction'
// import { Redirect } from 'react-router-dom'
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
                        <label htmlFor="title">Title:</label>
                        <input style={{fontWeight: "bold" } } type="text" id="title" onChange={this.handleChange} />
                    </div>
                    <div className="sub-title">
                        <label htmlFor="subtitle">Subtitle:</label>
                        <input  type="text" id ="Subtitle" onChange={this.handleChange} placeholder ="Đây là phụ đề"/>
                    </div>
                    <div className="content-field">
                        <label htmlFor="content">Content:</label>
                        <textarea id="content" onChange={this.handleChange} ></textarea>
                        
                        
                    </div>
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
  