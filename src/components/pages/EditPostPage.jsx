import React, { Component } from 'react'
import NavBar from '../layout/NavBar.jsx'
import CreatePost from '../post/CreatePost.jsx'
import {firestore} from '../../config/firebaseConfig'

export default class EditPostPage extends Component {
    state = {
        editingPost: {}

    }
    componentDidMount = async () => {
    //    const contentId = this.props.location.pathname.split('/')[2]
    //    const postData = await firestore.collection('posts').doc(contentId).get()
    //    console.log(postData)
    //    await this.setState({editingPost: postData.data()})
    
    }
    render() {
        return (
            <div id="read-post-page">
                <NavBar/>
                <CreatePost editingPost={this.props.location.state}/>
            </div>
        )
    }
}
