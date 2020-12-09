import React, { Component } from 'react'
import InputComment from './InputComment'
import UserComment from './UserComment'
import testImage from '../../images/testImage3.jpg'
import moment from 'moment'
export default class CommentBoxCommentbox extends Component {
    state = {
        user: {
            name: 'chaudeptrai123',
            avatar: testImage,
        },
        comments: []
    }

    
    handlePostNewComment = (e) => {
        this.setState({comments: [...this.state.comments, {
            commentContent: e.target.value,
            dateComment: moment().format('MMMM Do, YYYY')
        }]})
    }
    render() {
        const {user, comments} = this.state
        return (
            <div id="comment-component-container">
                <InputComment user={user} handlePostNewComment={this.handlePostNewComment}/>
                {comments.map((comment, index) => (
                    <UserComment 
                        key={index}
                        name={user.name}
                        avatar={user.avatar}
                        dateComment={comment.dateComment}
                        commentContent={comment.commentContent}
                    />
                ))}
            </div>
        )
    }
}
