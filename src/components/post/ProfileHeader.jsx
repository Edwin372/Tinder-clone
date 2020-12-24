import React, {Component} from 'react'
import './ProfileHeader.scss'
import plusIcon from '../../svg/plusIcon.svg'
import circleIcon from '../../svg/circleIcon.svg'
import {storage} from '../../config/firebaseConfig.js'
import Swal from 'sweetalert2';

export default class ProfileHeader extends Component{
    state={
        url: '',
        name: '' 
    }
    // UploadFile = e =>{
    //     const file = e.target.files[0];
    //     const storageRef = storage.ref();
    //     const fileRef = storageRef.child('profileImage').child('images/'+ file.name);
    //     fileRef.put(file).then(() => {
    //         console.log("Uploaded successfully")
    //     }).then(()=> {
    //         fileRef.getDownloadURL().then(function(url) {
    //             document.querySelector('img').src = url;
    //         }).catch(function(error) {
    //             console.error(error);
    //         });
    //     })
    // }
    handleChange = async () => {
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
                    deleteRef.delete().then(function() {
                        console.log("Deleted Successful")
                    }).catch(function(error) {
                        console.error(error);
                    });
                    fileRef.put(file).then(() => {
                        console.log("Uploaded successfully");
                        this.setState({name: file.name });
                    }).then(()=> {
                        fileRef.getDownloadURL().then(function(url) {
                            document.querySelector('img').src = url;
                        }).catch(function(error) {
                            console.error(error);
                        });
                    })
                }
              })
            }
            reader.readAsDataURL(file)
          }
    }
    render() {
        return(
            <div className="profile-container">
                <img className="image" src={this.state.url || this.props.user.image} alt="default-image"/>
                <button 
                     type="file"
                     id="button"
                     onClick={this.handleChange}
                />
                <div className="label">
                    <label className="image-container" htmlFor="button" >
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
