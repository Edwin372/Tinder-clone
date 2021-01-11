import React from 'react'
import NotificationMenu from '../components/dropdown/NotificationMenu.jsx'
import profile from "../svg/avatar.svg";

export default {
    title: "Notification Menu ",
    component: NotificationMenu,
  };
  
 const Template = (args) => <NotificationMenu {...args} />;
 export const notificationMenu = Template.bind({});
 notificationMenu.args = {
    box: { 
      message: "Dat is following you!",
      photo: '',
      receiverId: "",
    },
};