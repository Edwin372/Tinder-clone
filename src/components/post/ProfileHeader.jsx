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
import Profile from './Profile.jsx'

class ProfileHeader extends Component{
    state={
        url: '',
        name: '',
        isPostShow: false,
        isProfileDetailShown: false,
        isSeriesShown: false,
        posts: [],
        profile: {},
        followId: '',
    }
    handleChangeAvatar = async (instance) => {
        const { value: file } = await Swal.fire({
            title: 'Do you want to save the changes?',
            showCancelButton: true,
            confirmButtonText: `OK`,
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
    componentWillMount = async () => {
        this.fetchData()
        this.fetchProfile()
        this.fetchFollow()
        
    }
    fetchFollow = async () =>  {
        const { firestore } = this.props;
        console.log(this.props.auth.uid,  this.props.uid)
        var rawData = await firestore
        .collection("follows")
        .where('followerId', '==', this.props.auth.uid)
        .where('followedId', '==', this.props.uid)
        .get()
        rawData.forEach((data) => {this.setState({followId: data.id}) })
        
    }
    componentWillReceiveProps=  () => {
        if (this.props.isUserProfile && this.state.reFetch  ) {
            this.setState({reFetch: false})
            window.location.reload()
        }
    }
    fetchProfile = async () => {
        const { firestore } = this.props;
        var rawData = await firestore
        .collection("users")
        .doc(this.props.uid)
        .get()
        
        this.setState({profile: rawData.data()}) 
    }
    fetchData = async () => {
        const { firestore } = this.props;
        var rawData = await firestore
        .collection("posts")
        // .orderBy("createdAt", "desc")
        .where('userId', '==', this.props.uid)
        .get()
        let posts = rawData.docs.map((post) => (
                {   id: post.id,
                    ...post.data()
                }
            )
        )
        this.setState({posts: posts})
    }
    
    handleUnfollow = async instance => {
        const { firestore } = this.props;
        await firestore
        .collection("follows")
        .doc(this.state.followId)
        .delete()
        .then(() => {
            instance.setState({followId: '' })
        })
        
    }
    handleFollow = async (followerId, followedId, instance) => {
        const { firestore } = this.props;
        await firestore
        .collection("follows")
        .add({
            followerId,
            followedId
        })
        .then((data) => {
            instance.setState({followId: data.id })
        })
    }
   
    render() {
        const {isUserProfile, auth, uid} = this.props
        const {profile, followId}= this.state
    
        return(
            <div className="profile-container">
                <img id="profile-avatar" className="image-avatar" src={profile.avatar || defaultAvatar} alt="default"/>
                {
                    !isUserProfile
                    ? <button 
                        id="follow-btn" 
                        className={ followId ? 'following-btn' : ''} 
                        onClick={
                            () => {
                                followId 
                                ? this.handleUnfollow(this)
                                : this.handleFollow(auth.uid, uid, this)
                            }
                        }
                    >{
                        followId ? 'Following' : 'Follow'
                    }
                    </button>
                    
                    :<div className="label">
                        <button className="image-container" htmlFor="button" onClick={() => {this.handleChangeAvatar(this)}}>
                            <img className="image2" src={plusIcon} alt="plus-icon"/>
                        </button>
                     </div>
                }
                
                <p className="user-name">{profile.displayName || ''}</p>
                <p className="biography">{profile.bio || ''}</p>
                <div className="follow">
                    <p className= "followers">{profile.follower || 0}<span> followers</span></p>
                   
                    <p className= "following">{profile.following || 0}<span> following</span></p>
                </div>
                <div className = "btn-container">
                    <button 
                        className="profile-btn" 
                        onClick={
                            () => {
                                this.setState({
                                    isProfileDetailShown: true,
                                    isPostShow: false,
                                    isSeriesShown: false
                                })}
                            }  
                    >
                        Profile
                    </button>
                    <button 
                        className="posts-btn"
                        onClick={
                            () => {
                                this.setState({
                                    isProfileDetailShown: false,
                                    isPostShow: true,
                                    isSeriesShown: false
                                })}
                            }>Posts
                    </button>
                    <button 
                         className="series-btn"  
                        onClick={() => {
                            this.setState({
                                isProfileDetailShown: false,
                                isPostShow: false,
                                isSeriesShown: true
                            })}
                            }>Series
                    </button>
                </div>
                <div id="posts-list-container" className={this.state.isPostShow? 'post-show': 'post-hide'}>
                    {
                        this.state.posts.map((post, index) => (
                            <div key={index}>
                                <ProfilePost 
                                    isUserProfile={isUserProfile}
                                    post={post}
                                    profile={this.props.profile}
                                    fetchData={this.fetchData}
                                />
                            </div>
                          
                        ))
                    }
                </div>
                <div id="posts-list-container" className={this.state.isProfileDetailShown ? 'post-show': 'post-hide'}>
                    <Profile
                        profile={this.props.profile}
                    />
                </div>
                <div id="posts-list-container" className={this.state.isSeriesShown? 'post-show': 'post-hide'}>
                    {
                       
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth,
    }
  }
  
  export default compose(
    connect(mapStateToProps),
    firestoreConnect()
  )(ProfileHeader)
  