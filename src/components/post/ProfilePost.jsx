import React, { Component } from "react";
import moment from 'moment'
import './ProfilePost.scss'
import view from '../../svg/view.svg'
// import ReadingContent from '../layout/ReadingContent.jsx'
// import ComponentBox from '../comments/Commentbox.jsx'
// import DropDownOption from "../buttons/DropDownOption.jsx";
// import close from '../../svg/close.svg'
import { Link } from 'react-router-dom'
import DropDownOption from "../buttons/DropDownOption.jsx"
import {firestore} from '../../config/firebaseConfig'
import Swal from 'sweetalert2'
import {Redirect} from 'react-router'

export default class ProfilePost extends Component {
    state = {
        haveLiked: false,
        viewOnDetail: false,
        redirect: false
    }
    setTitle(){
        return (this.props.post.title.length > 49) ? this.props.post.title.slice(0, 49) + '...' : this.props.post.title;
    };
    setSubtitle(){
        return (this.props.post.subtitle.length > 49) ? this.props.post.subtitle.slice(0, 49) + '...' : this.props.post.subtitle;
    };
    handleDelete = async (id) => {
        Swal.fire({
            title: 'Do you want to delete this post?',
            showCancelButton: true,
            confirmButtonText: `Confirm`,
            denyButtonText: `Cancel`,
          }).then(async (result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                await firestore.collection('posts').doc(id).delete()
                Swal.fire('deleted!', '', 'success')
                this.props.fetchData()
            } 
          })
    }
    handleEdit = () => {
        this.setState({redirect: true});
    }
    render() {
        const {post, profile} = this.props
        if (this.state.redirect) {
            const {id} = this.props.post
            const location = {
                pathname: `/edit-post/${id}`,
                state: this.props.post
            }
            return <Redirect push to={location} />;
        }
        return (
            <div className={`${this.state.viewOnDetail ? 'detail': 'general'}`}> 
                <div className="post-container">
                    <Link to={{
                        pathname: '/post/' + post.id,
                        state: {
                          post,
                          profile
                        }
                        }} key={post.id}
                        style={{textDecoration: 'none', color: 'black'}}
                    >
                        <div className="profile-post" onClick={() => {this.setState({viewOnDetail: !this.state.viewOnDetail})}}>
                            <p className="title-profile-post">{this.setTitle()}</p>
                            <p className="subtitle-profile-post">{this.setSubtitle()}</p>
                            <div className="profile-post-info">
                                <p className="profile-post-date">{moment(this.props.post.createdAt).calendar()}</p>
                                    <div className="profile-post-viewer">
                                        <div className="view">
                                            <img src={view} alt="view-num"/>
                                            <span>{(this.props.post.view > 100000) ? (Math.floor(this.props.post.view/1000)) + 'K' : this.props.post.view}</span>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </Link>
                    {
                        this.props.isUserProfile
                        ?  <DropDownOption
                                buttons = {[
                                    {
                                    name: "Delete",
                                    handleClick: () => {
                                        const {id} = this.props.post
                                        this.handleDelete(id)
                                    },
                                    },
                                    {
                                    name: "Edit",
                                    handleClick: () => {
                                        this.handleEdit()
                                    },
                                    },
                                ]}
                            />  
                        : null
                    }
                  
                </div>
            </div>
        )
    }
}
