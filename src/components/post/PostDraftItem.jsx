import React, { Component } from 'react'
import moment from 'moment'
import './ProfilePost.scss'
import { Link } from 'react-router-dom'
import DropDownOption from "../buttons/DropDownOption.jsx"
import '../pages/ProfilePage.scss'
import {firestore} from '../../config/firebaseConfig'
import Swal from 'sweetalert2'

export default class postDraftItem extends Component {
        handleDelete = async (id) => {
            Swal.fire({
                title: 'Do you want to delete this draft?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: `Confirm`,
                denyButtonText: `Cancel`,
              }).then(async (result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    await firestore.collection('drafts').doc(id).delete()
                    Swal.fire('deleted!', '', 'success')
                } 
              })
    }
    render() {
        const {draft} = this.props
        return (
                <div className="post-container" key={this.props.key}>
                    <Link to={{
                        pathname: '/draft/' + draft.id,
                        state: {
                            draft,
                        }
                        }} key={draft.id}
                        style={{textDecoration: 'none', color: 'black'}}
                    >
                        <div className="profile-post" >
                            <p className="title-profile-post">{draft.title}</p>
                            <p className="subtitle-profile-post">{draft.subtitle}</p>
                            <div className="profile-post-info">
                                <p className="profile-post-date">{moment(draft.createdAt).calendar()}</p>
                            </div>
                        </div>
                    </Link>
                    <DropDownOption
                        buttons = {[
                            {
                              name: "Delete",
                              handleClick: () => {
                                const {id} = draft
                                this.handleDelete(id)
                              },
                            },
                           
                        ]}
                    />
                </div>
    )
    }
}
