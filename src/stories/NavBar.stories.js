
import React from 'react'
import Navbar from '../components/layout/NavBar.jsx'
import testImage6 from '../images/testImage6.jpg'

export default {
  title: ' Navbar',
  component: Navbar,
  
};

const Template = (args) => <Navbar {...args} />;

export const signedInNavbar = Template.bind({});
signedInNavbar.args = {
  auth : {
      uid: '12313123'
  }, 
  profile: {
      displayName: 'Dit con me may Tran Hoai Chau',
      avatar: testImage6
  }
}

export const signedOutNavBar = Template.bind({});
signedOutNavBar.args = {
  auth : {
    //   uid: '12313123'
  }, 
  profile: {
      displayName: 'hello'
  }
}

