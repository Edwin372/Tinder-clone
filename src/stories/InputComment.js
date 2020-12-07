
import React from 'react'
import InputComment from '../components/comments/InputComment.jsx'
import avatar from '../svg/avatar.svg'

export default {
    title: 'Example/InputComment',
    component: InputComment,
    
};
  
  const Template  = (args) => (
      <InputComment {...args} />
  );
  
  export const InputComment = Template.bind({});
  InputComment.args = {
    user: { 
      name: Tung,
      ava: avatar,
    }
  };
  
