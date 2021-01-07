import React from 'react'
import Profile from '../components/post/Profile.jsx'

export default {
    title: "Profile",
    component: Profile,
  };
  
 const Template = (args) => <Profile {...args} />;
 
 export const profile = Template.bind({});
 profile.args = {
    profile: { 
      displayName: 'Tùng Trần',
      bio:"Khi bạn có niềm tin vào cuộc sống thần tài chắc chắn sẽ đến bên bạn, chỉ cần bạn không từ bỏ \n - Tùng Trần -",
      gmail: 'tctung18@apcs.vn',
      work: 'University of Sciences',
      job: 'College student',
      pass: '******',
      dob: '18/04/2000',
    }
  };