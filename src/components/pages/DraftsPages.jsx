import React, { Component } from 'react'
import Navbar from '../layout/NavBar.jsx'
import PostList from '../post/PostList.jsx'
import {firestore} from '../../config/firebaseConfig'
import { connect } from 'react-redux'
import './DraftsPages.scss'
class DraftsPages extends Component {
    state = {
        drafts: []
    }
    async componentDidMount() {
       const rawDrafts = 
       await firestore.collection('drafts')
       .where('userId', '==', this.props.auth.uid)
    //    .orderBy('createdAt')
       .get()
       
       let drafts = []
       rawDrafts.docs.forEach(
           (draft) => {
               drafts.push(draft.data())
           }
       )
       this.setState({drafts})
    }
    render() {
        const {drafts} = this.state
        console.log(drafts)
        return (
            <div id="draft-page">
                <Navbar/>
                <PostList posts={drafts} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth
    }
  }
  
  export default connect(mapStateToProps)(DraftsPages)
  

  