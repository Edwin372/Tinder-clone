import React from 'react'
import CommentBox from '../components/comments/Commentbox.jsx'

export default {
    title: 'Example/Commentbox',
    component: CommentBox,
}

const Template  = (args) => (
    <CommentBox {...args} />
);

export const commentBox = Template.bind({});
CommentBox.args = {
  post: { 
   
  }
};