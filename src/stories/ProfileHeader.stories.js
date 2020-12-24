import React from 'react';
import ProfileHeader from '../components/post/ProfileHeader.jsx';
import defaultImage from '../images/defaultImage.jpg'

export default {
  title: ' Profile Header',
  component: ProfileHeader,
  
};

const Template  = (args) => (
    <ProfileHeader {...args} />
);

export const profileHeader = Template.bind({});
profileHeader.args = {
  user: { 
    displayName: 'Tùng Trần',
    bio: "Khi bạn có niềm tin vào cuộc sống, thần tài chắc chắn sẽ đến bên bạn, chỉ cần bạn không từ bỏ - Tùng Trần -",
    followers:'116',
    following:'16',
    image: defaultImage
  }
};

