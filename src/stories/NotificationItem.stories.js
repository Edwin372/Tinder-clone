import React from 'react'
import NotificationItem from '../components/dropdown/NotificationItem.jsx'
import profile from "../svg/avatar.svg";

export default {
    title: "Notification Item ",
    component: NotificationItem,
  };
  
 const Template = (args) => <NotificationItem {...args} />;
 export const notificationItem = Template.bind({});
 notificationItem.args = {
    box: { 
      message: "Dat is following you!",
      photo: '',
      receiverId: "",
    },
};