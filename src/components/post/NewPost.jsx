import React, { Component } from 'react'
import DropDownOption from '../buttons/DropDownOption.jsx'
import Swal from 'sweetalert2'
import {storage} from '../../config/firebaseConfig.js'
import './NewPost.scss'

export default class NewPost extends Component {
    state = {
        newPostTitle: this.props.post.title,
        isEditting: false,
        url: '',
        name: '', 
    }
    setTitle(){
        return (this.state.newPostTitle.length > 18) ? this.state.newPostTitle.slice(0, 18) + '...' : this.state.newPostTitle;
    };
    renameTitle = e => {
        if (e.key === 'Enter') {
            e.preventDefault();
            this.setState({ isEditting: false, newPostTitle: document.getElementById('rename').value})
        }
    };
    changeBackground = async (instance) => {
        const { value: file } = await Swal.fire({
            showCancelButton: true,
            title: 'Select image for background',
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
                title: 'Would you like to choose this photo as your background?',
                imageUrl: e.target.result,
                confirmButtonText: `Yes`,
                showDenyButton: true,
                denyButtonText: `No`,
              }).then((result) => {
                if (result.isConfirmed) {
                    const storageRef = storage.ref();
                    const fileRef = storageRef.child('SeriesBackground').child('images/'+ file.name);
                    const deleteRef = storageRef.child('SeriesBackground').child('images/'+ this.state.name);
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
                            document.getElementById(`new-serie-image-${instance.props.post.id}`).src = url;
                        }).catch(function(error) {
                            console.error(error);
                        });
                    })
                }
              })
            }
            reader.readAsDataURL(file)
          }
    };
    render() {
        return(
            <div className="new-serie">
                <button className="new-serie-btn">
                    <img className="new-serie-image" id={`new-serie-image-${this.props.post.id}`} src={this.state.url || ''}/>
                </button>
                {
                    this.state.isEditting?
                    
                        <input 
                            id="rename"
                            type="text"
                            defaultValue={this.state.newPostTitle}
                            onKeyPress={this.renameTitle}
                        />
                    : 
                    <label className="new-serie-title">
                        {this.setTitle()}
                        <DropDownOption
                            buttons={[
                                {
                                    name: "Rename",
                                    handleClick: () => {
                                        this.setState({
                                            isEditting: !this.state.isEditting  
                                        })
                                        console.log("Rename");
                                    },
                                },
                                {
                                    name: "Delete",
                                    handleClick : () => {
                                        console.log("Delete");
                                    },
                                },
                                {
                                    name: "Change background image",
                                    handleClick: () => {
                                        this.changeBackground(this);
                                        console.log("Changed");
                                    },
                                },
                            ]}
                    /></label>
                }
            </div>
        )
    }
}
