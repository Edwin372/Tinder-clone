import React, { Component } from 'react'
import EditorJS from 'react-editor-js'
import { connect } from 'react-redux'
import { createPost } from '../../store/actions/postAction'
// import { Redirect } from 'react-router-dom'
import './CreatePost.scss'
import ImageTool from '@editorjs/image';
import CodeTool from '@editorjs/code';
import Underline from '@editorjs/underline';
import InlineCode from '@editorjs/inline-code';
import Header from '@editorjs/header'
import List from '@editorjs/list';
import '../buttons/CreatePostBtn.jsx';
import {storage} from '../../config/firebaseConfig.js';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
import TagDropDown from '../dropdown/TagDropDown';
import {firestore} from '../../config/firebaseConfig'
import moment from 'moment'
class extendedImageBlock extends ImageTool {
    removed() {
        var deleteRef = storage.refFromURL(this.data.file.url)
        deleteRef.delete().then(function() {
            console.log("Deleted Successful")
          }).catch(function(error) {
            //error occurred!
          });
    }
}

const editorJsTools = {
    code: CodeTool,
    underline: Underline,
    paragraph: {
        config: {
          placeholder: 'Tell your story...'
        }
    },
    inlineCode: {
        class: InlineCode,
        shortcut: 'CMD+SHIFT+M',
    },
    list: {
        class: List,
        inlineToolbar: true,
    },
    header: Header,
    image: {
        class: extendedImageBlock,
        config: {
            uploader: {
                async uploadByFile(file) {
                    var storageRef = storage.ref();
                    var imagesRef = storageRef.child('EditorJS').child('images/'+ file.name);
                    var metadata = {
                        contentType: 'image/jpeg'
                    };
                    var uploadTask = await imagesRef.put(file, metadata);
                    console.log("Uploaded successfully!", uploadTask);
                    const downloadURL = await uploadTask.ref.getDownloadURL();
                    return {
                        success: 1,
                        file: {
                            url: downloadURL
                        }
                    }
                }
            }
        }
    }
}

const MySwal = withReactContent(Swal)
class CreatePost extends Component {
    state= {
        postDenied: true,
        editor: {},
        tags: [],
        title: '',
        subtitle: '',
        data: {},
        editMode: false,
        draftMode: false,
        postData: {}
    }

    componentDidMount = async () => {
        const {editingPost, draft} = this.props
        if (editingPost) {
            this.setState({
                editMode: true,
                title: editingPost.title,
                subtitle: editingPost.subtitle,
                data: editingPost.postContentData,
                postData: editingPost
            })
        } else if (draft) {
            this.setState({
                draftMode: true,
                title: draft.title,
                subtitle: draft.subtitle,
                
            })
        }
    }
    
    handleChange = (e) => {
      this.setState((state) => {
          return {
              [e.target.id]: e.target.value,
              postDenied: false,
          }
      }, () => {
         if(!this.state.title) {this.setState({postDenied: true})}
      })
    }

    handleSubmit = async (instance) => {
        if (this.state.title !== "" ) {
            MySwal.fire({
                title:    
                 <TagDropDown
                     handleChange={(newTags) => { instance.setState({tags: newTags},() => console.log(instance.state))}}
                 />,
                 customClass:{
                     title:'custom-title'
                 }
            }).then(async () => {
                 const {title, subtitle, tags, editor} = instance.state
                 let tagArr = tags.map(tag => tag.label)
                 const postContentData = await editor.save();
                 return instance.props.createPost({title: title || '', subtitle: subtitle || '', postContentData: postContentData || '', tags: tagArr || []});
            }).finally( () => {
                 Swal.fire({
                     icon: 'success',
                     title: 'Your work has been uploaded',
                     showConfirmButton: false,
                     timer: 1500
                 }).then(() => {
                     window.location.replace('/')
                 })
             })
        }
      
    };

    handleUpdate = (instace) => {
        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: `Save`,
            denyButtonText: `Don't save`,
          }).then( async (result) => {
            /* Read more about isConfirmed, isDenied below */
            
            if (result.isConfirmed) {
             console.log('got here')

                const postContentData = await instace.state.editor.save();
                await firestore.collection('posts').doc(instace.state.postData.id).set(
                { 
                    ...this.state.postData,
                    title: this.state.title,
                    subtitle: this.state.subtitle,
                    postContentData: postContentData
                    
                }
              )
              Swal.fire('Saved!', '', 'success')
              window.location.replace('/')
            } 
          })
    }

    handleSave = async () => {
        const {title, subtitle, tags, editor} = this.state
        const postContentData = await editor.save();
  
        await firestore
        .collection("drafts")
        .add({
            contentId: null,
            userId:this.props.auth.uid,
            title,
            subtitle,
            data: postContentData,
            tags,
            createdAt: moment().format()
        })
    }

    handleSubmitDraft = async (instance, draftId) => {
        if (this.state.title !== "" ) {
            MySwal.fire({
                title:    
                 <TagDropDown
                     handleChange={(newTags) => { instance.setState({tags: newTags},() => console.log(instance.state))}}
                 />,
                 customClass:{
                     title:'custom-title'
                 }
            }).then(async () => {
                 const {title, subtitle, tags, editor} = instance.state
                 let tagArr = tags.map(tag => tag.label)
                 const postContentData = await editor.save();
                 await firestore
                .collection("drafts")
                .doc(draftId)
                .delete()
                await firestore
                .collection("posts")
                .add({
                    title: title || '',
                    subtitle: subtitle || '',
                    postContentData: postContentData || '',
                    tags: tagArr || []
                })
            }).finally( () => {
                 Swal.fire({
                     icon: 'success',
                     title: 'Your work has been uploaded',
                     showConfirmButton: false,
                     timer: 1500
                 }).then(() => {
                     window.location.replace('/')
                 })
             })
        }
      
    };

    handleSaveExistedDraft = async (draftId) => {
        const {title, subtitle, tags, editor} = this.state
        const postContentData = await editor.save();
        await firestore
        .collection("drafts")
        .doc(draftId)
        .set({

            ...this.props.draft,
            title,
            subtitle,
            data: postContentData,
            tags,
            createdAt: moment().format()
        })
    }

    render() {
        const {editingPost, draft} = this.props
        console.log(draft)
        return (
            <div id='create-post-container'>
                <div id="save-btn-container">
                    <button onClick={() => {
                        this.state.draftMode
                        ?this.handleSaveExistedDraft(draft.id)
                        :this.handleSave()
                    }}>Save</button>
                </div>
                <div className="create-post-form">
                    <div className="create-signature">
                    <label>Create your own signature</label>
                    </div>
                    <div className="title-field">
                        <input style={{fontWeight: "bold" } } type="text" id="title" placeholder="Title" onChange={this.handleChange} value={this.state.title}/>
                    </div>
                    <div className="sub-title">
                        <input placeholder="Subtitle" type="text" className ="subtitle" id="subtitle" contentEditable data-placeholder="Subtitle" onChange={this.handleChange} value={this.state.subtitle}/>
                    </div>
                    {/* Content */}
                    <div className="content-field">
                    <EditorJS 
                        instanceRef={instance => {this.setState({editor: instance})}} 
                        id="editorjs"
                        holder="editorjs"
                        tools={editorJsTools}
                        data={(editingPost && editingPost.postContentData) || (draft && draft.data )}
                    >
                         <div id="editorjs" />
                    </EditorJS>
                    </div>
                    {
                        this.state.editMode 
                        ? <button className="create-post-btn" onClick={() => {this.handleUpdate(this)}}  >UPDATE</button>
                        : this.state.editMode 
                        ? <button className="create-post-btn" onClick={() => {this.handleSubmitDraft(this)}}  >POST</button>
                        : <button className="create-post-btn" onClick={() => {this.handleSubmit(this)}}  >POST</button>
                    }
                   
                    {/* <div className="input-field">
                        <button  className="btn pink lighten-1 z-depth-0">Publish</button>
                    </div> */}
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
const mapDispatchToProps = dispatch => {
    return {
      createPost: (post) => dispatch(createPost(post))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(CreatePost)
  
  




