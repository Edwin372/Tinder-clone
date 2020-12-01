import React from 'react'
import CreatePost from '../components/post/CreatePost.jsx'

export default {
  title: 'CreatePost',
  component: CreatePost,
  
};

const Template  = (args) =><CreatePost {...args} />;

export const createPost = Template.bind({});
createPost.args = {
  post: { 
  }
};