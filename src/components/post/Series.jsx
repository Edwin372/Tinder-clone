import React, {Component} from 'react'
import './Series.scss'
import {storage} from '../../config/firebaseConfig.js'
import NewPost from './NewPost'
import Swal from 'sweetalert2';
import theNerdIcon from '../../svg/theNerdIcon.svg'
import addwithCircle from '../../svg/addwithCircle.svg'

import {v4 as uuid} from 'uuid'
export default class Series extends Component { 
    state = {
        isEditting: false,
        url: '',
        series: this.props.series,
        newTitle: "",
        index: ""
    }
    setTitle = (element) => {
        this.setState({newTitle: element})
    }
    addSerie = () => {
        const newSerie = Object.assign([], this.state.series);
        const newId=uuid();
        newSerie.push({
            id: newId,
            title: this.state.newTitle
        });
        this.setState({series: newSerie}); 
        return newId
    }
    handleAdd = async () => {
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
                html: '<p>Would you like to choose this photo as your background?</p>'+'<p>If you want so, please enter the title below</p>',
                input: 'text',
                imageUrl: e.target.result,
                confirmButtonText: `Yes`,
                showDenyButton: true,
                denyButtonText: `No`,
                inputValidator: (value) => {
                    if (!value) {
                      return 'You need to write something!'
                    }
                  }
              }).then((result) => {
                if (result.isConfirmed) {
                    this.setTitle(result.value);
                    const newSeriesId = this.addSerie();
                    const storageRef = storage.ref();
                    const fileRef = storageRef.child('SeriesBackground').child('images/'+ file.name);
                    fileRef.put(file)
                    .then(() => {
                        console.log("Uploaded successfully");
                    }).then(()=> {
                        fileRef.getDownloadURL().then(function(url) {
                            document.getElementById(`new-serie-image-${newSeriesId}`).src = url;
                        }).catch(function(error) {
                            console.error(error);
                        });
                    })
                    // this.setState({url: document.getElementById('new-serie-image').src});
                }
              })
            }
            reader.readAsDataURL(file)
          }
    }
    // handleDelete = (id) => {
    //     const newSerie = this.state.series;
    //     newSerie.splice(id,1);
    //     this.setState({series: newSerie});
    // }
    render() {
        return (
            <div className="series-container">
                <div className="default">
                    <button className="default-btn">
                        <img className="default-image" src={theNerdIcon||''} alt="default-image"/>
                    </button>
                    <label className="default-title">All saved posts</label>
                </div>
                <div className="new-serie-contain">
                    { this.state.series && this.state.series.map((post, index) => {
                    return (
                        <NewPost 
                            id={this.addSerie}
                            key={index}
                            post={post}
                        />              
                    )
                    })}  
                </div>
                <div className="create-new-one" id="create-id">
                    <button className="create-new-one-btn" onClick={this.handleAdd}>
                        <img id="create-new-one-image" src={addwithCircle||''} alt="default-image"/>
                    </button>
                    <label className="create-new-one-title" >Create new one</label>
                </div>
            </div>
        )
    }
}