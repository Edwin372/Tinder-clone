import React, {Component} from 'react'
import './ProfilePage.scss'
import defaultProfileImage from '../../svg/defaultProfileImage.svg'
import plusIcon from '../../svg/plusIcon.svg'
import circleIcon from '../../svg/circleIcon.svg'
import {storage} from '../../config/firebaseConfig.js';

export default class ProfilePage extends Component{
    state={
        url: ''
    }
    handleChange = e =>{
        const file = e.target.files[0];
        const storageRef = storage.ref();
        const fileRef = storageRef.child('profileImage').child('images/'+ file.name);
        fileRef.put(file).then(() => {
            console.log("Uploaded successfully")
        }).then(()=> {
            fileRef.getDownloadURL().then(function(url) {
                document.querySelector('img').src = url;
            }).catch(function(error) {
                console.error(error);
            });
        })
    }
    handleDelete = e => {
        const file = e.target.files[0];
        const storageRef = storage.ref();
        const fileRef = storageRef.child('profileImage').child('images/'+ file.name);
        fileRef.delete().then(function() {
            console.log("Deleted Successful")
          }).catch(function(error) {
            console.error(error);
          });
    }
    render() {
        return(
            <div className="profile-container">
                <img className="image" src={this.state.url || defaultProfileImage} alt="default-image"/>
                <input 
                     type="file"
                     id="input"
                     onChange={this.handleChange}
                     onClick={this.handleDelete}
                />
                <div className="label">
                    <label className="image-container" htmlFor="input" >
                        <img className="image1" src={circleIcon} alt="circle-icon"/>
                        <img className="image2" src={plusIcon} alt="plus-icon"/>
                    </label>
                </div>
                <p className="user-name">{this.props.user.displayName}</p>
                <p className="biography">{this.props.user.bio}</p>
                <div className="follow">
                    <p className= "followers">{this.props.user.followers}</p>
                    <p>followers</p>
                    <p className= "following">{this.props.user.following}</p>
                    <p>following</p>
                </div>
                <div className = "btn-container">
                    <button className="profile-btn">Profile</button>
                    <button className="posts-btn">Posts</button>
                    <button className="series-btn">Series</button>
                </div>
            </div>
        )
    }
}
