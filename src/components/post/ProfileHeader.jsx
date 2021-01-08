import React, {Component} from 'react'
import './ProfileHeader.scss'
import plusIcon from '../../svg/plusIcon.svg'
import {storage} from '../../config/firebaseConfig.js'
import Swal from 'sweetalert2'
import defaultAvatar from '../../images/defaultAvatar.png'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import ProfilePost from './ProfilePost'
import swal from 'sweetalert'

class ProfileHeader extends Component{
    state={
        url: '',
        name: '',
        isPostShow: false,
        posts: []
    }
    handleChange = async (instance) => {
        const { value: file } = await Swal.fire({
            title: 'Do you want to save the changes?',
            showCancelButton: true,
            confirmButtonText: `OK`,
            showCancelButton: true,
            title: 'Select image',
            input: 'file',
            inputAttributes: {
              'accept': 'image/*',
              'aria-label': 'Upload your profile picture'
            }
          })
          if (file) {
            const reader = new FileReader()
            reader.onload = (e) => {
              Swal.fire({
                title: 'Would you like to choose this photo as your avatar?',
                imageUrl: e.target.result,
                confirmButtonText: `Yes`,
                showDenyButton: true,
                denyButtonText: `No`,
                customClass:{
                    image:'custom-image'
                }
              }).then((result) => {
                if (result.isConfirmed) {
                    const storageRef = storage.ref();
                    const fileRef = storageRef.child('profileImage').child('images/'+ file.name);
                    const deleteRef = storageRef.child('profileImage').child('images/'+ this.state.name);
                    deleteRef
                    .delete()
                    .then(function() {
                        console.log("Deleted Successful")
                    })
                    .catch(function(error) {
                        console.error(error);
                    });
                    fileRef.put(file)
                    .then(() => {
                        console.log("Uploaded successfully");
                        this.setState({name: file.name });
                    })
                    .then(()=> {
                        fileRef.getDownloadURL()
                        .then( async function(url) {
                            const { firestore } = instance.props;
                            firestore.collection("users").doc(instance.props.uid).update({
                                avatar: url
                            });
                            document.getElementById('profile-avatar').src = url;
                        })
                        .catch(function(error) {
                            console.error(error);
                        });
                    })
                }
              })
            }
            reader.readAsDataURL(file)
          }
    }
    componentDidMount() {
        this.fetchData()
    }
    handleDeletePost = () => {
        swal.fire({
            title: 'Are you sure you want to delete'
            
        })
    }
    handleEditPost = () => {

    }
    fetchData = async () => {
        const { firestore } = this.props;
        var posts = await firestore
        .collection("posts")
        // .orderBy("createdAt", "desc")
        .where('userId', '==', this.props.uid)
        .get()
        let filteredPosts = posts.docs.map((post) => (
                {   id: post.id,
                    ...post.data()
                }
            )
        )
        this.setState({posts: filteredPosts})
    }

    render() {

        return(
            <div className="profile-container">
                
                <img id="profile-avatar" className="image-avatar" src={this.props.profile.avatar || defaultAvatar} alt="default"/>
                <div className="label">
                    <button className="image-container" htmlFor="button" onClick={() => {this.handleChange(this)}}>
                        <img className="image2" src={plusIcon} alt="plus-icon"/>
                    </button>
                </div>
                <p className="user-name">{this.props.profile.displayName || ''}</p>
                <p className="biography">{this.props.profile.bio || ''}</p>
                <div className="follow">
                    <p className= "followers">{this.props.profile.followers || 0}<span> followers</span></p>
                   
                    <p className= "following">{this.props.profile.following || 0}<span> following</span></p>
                </div>
                <div className = "btn-container">
                    <button className="profile-btn">Profile</button>
                    <button className="posts-btn"onClick={() => {this.setState({isPostShow: !this.state.isPostShow})}}>Posts</button>
                    <button className="series-btn">Series</button>
                </div>
                <div id="posts-list-container" className={this.state.isPostShow? 'post-show': 'post-hide'}>
                    {
                        this.state.posts.map(post => (
                            <ProfilePost 
                              post={post}
                              profile={this.props.profile}
                              fetchData={this.fetchData}
                            />
                        ))
                    }
                   
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth,
      profile: state.firebase.profile
    }
  }
  
  export default compose(
    connect(mapStateToProps),
    firestoreConnect()
  )(ProfileHeader)
  