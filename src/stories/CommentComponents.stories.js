import React from 'react'
import CommentBox from '../components/comments/Commentbox.jsx'
import sampleImage from '../images/testImage.jpg'


export default {
    title: 'Example/Commentbox',
    component: CommentBox,
}

const Template  = (args) => (
    <CommentBox {...args} />
);

export const commentBox = Template.bind({});
commentBox.args = {
  // user: {
  //   avatar: sampleImage
  // },
};