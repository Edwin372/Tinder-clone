import React, { Component } from 'react'
import Navbar from '../layout/NavBar.jsx'
import {firestore} from '../../config/firebaseConfig'
import { connect } from 'react-redux'
import DraftItem from  '../post/PostDraftItem.jsx'
import './DraftsPages.scss'
class DraftsPages extends Component {
    state = {
        drafts: []
    }
    async componentDidMount() {
        this.fetchData()
    }
    fetchData = async () => {
        const rawDrafts = 
        await firestore.collection('drafts')
        .where('userId', '==', this.props.auth.uid)
        .get()
        
        let drafts = []
        rawDrafts.docs.forEach(
            (draft) => {
                drafts.push({
                     ...draft.data(),
                     id: draft.id
                 })
             }
         )
        this.setState({drafts})
    }

    
    render() {
        const {drafts} = this.state
        return (
            <div id="draft-page">
                <Navbar/>
                <div id="draft-list">
                {
                     drafts.map(draft => (
                        <div key={draft.id}>
                        <DraftItem 
                          fetchDataDraftData={this.fetchData}
                          key={draft.id}
                          draft={draft}
                          profile={this.props.profile}
                          fetchData={this.fetchData}
                        />
                        </div>  

                    ))
                 }
                       
                </div>
               
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
  

  