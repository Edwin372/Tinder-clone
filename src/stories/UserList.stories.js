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
  posts : ['chaudeptrai1','chaudeptrai1','chaudeptrai2','chaudeptrai3','chaudeptrai4','chaudeptrai5']
}