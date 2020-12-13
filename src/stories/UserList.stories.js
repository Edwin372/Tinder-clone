import React from 'react'
import testImage3 from '../images/testImage3.jpg'
import testImage4 from '../images/testImage4.jpg'
import testImage1 from '../images/testImage1.jpeg'
import testImage2 from '../images/testImage2.jpg'
import testImage from '../images/testImage.jpg'
import UserList from '../components/dropdown/UserList.jsx'

export default {
  title: 'UserList',
  component: UserList,
};

const Template  = (args) =><UserList {...args} />;

export const userList = Template.bind({});
userList.args = {
  users : [{
    displayName:'chaudeptrai1', 
    avatar: testImage1,
  }, {
    displayName:'chaudeptrai2', 
    avatar: testImage2,
  }, {
    displayName:'chaudeptrai3', 
    avatar: testImage3,
  }, {
    displayName:'chaudeptrai4', 
    avatar: testImage4,
  }, {
    displayName:'chaudeptrai5', 
    avatar: testImage,
  }
]}