import React from 'react';
import ProfilePage from '../components/post/ProfilePage.jsx';

export default {
  title: ' Profile page',
  component: ProfilePage,
  
};

const Template  = (args) => (
    <ProfilePage {...args} />
);

export const profilePage = Template.bind({});
profilePage.args = {
  user: { 
    displayName: 'Tùng Trần',
    bio: "Khi bạn có niềm tin vào cuộc sống, thần tài chắc chắn sẽ đến bên bạn, chỉ cần bạn không từ bỏ - Tùng Trần -",
    followers:'116',
    following:'16'
  }
};

