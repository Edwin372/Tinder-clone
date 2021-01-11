import React from 'react'
import NewPost from '../components/post/NewPost.jsx'

export default {
    title: "NewPost",
    component: NewPost,
  };
  
 const Template = (args) => <NewPost {...args} />;
 
 export const newPost = Template.bind({});
 newPost.args = {
    post: {   
        title: "The new one",
        id: '',
    },
};