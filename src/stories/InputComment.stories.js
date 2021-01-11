
import React from 'react'
import InputComment from '../components/comments/InputComment.jsx'
import importedImg from '../images/testImage6.jpg'
import avatar from '../svg/avatar.svg'

export default {
    title: ' InputComment',
    component: InputComment, 
    
};
  
  const Template  = (args) => <InputComment {...args} />;
  
  export const inputComment = Template.bind({});
  inputComment.args = {
    user: { 
      name: "Tran Cao Tung",
      avatar: avatar,
      inputImage: importedImg,
    }
  }

 