
import React from 'react'
import Navbar from '../components/layout/NavBar.jsx'

export default {
  title: 'Example/Navbar',
  component: Navbar,
  
};

const Template = (args) => <Navbar {...args} />;

export const signedInNavbar = Template.bind({});
signedInNavbar.args = {
  auth : {
      uid: '12313123'
  }, 
  profile: {
      displayName: 'hello'
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

