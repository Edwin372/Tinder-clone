import React from 'react'
import NotificationDropDown from '../components/dropdown/NotificationDropDown.jsx'


export default {
    title: "Notification Drop Down ",
    component: NotificationDropDown,
  };
  
 const Template = (args) => <NotificationDropDown {...args} />;
 export const notificationDropDown = Template.bind({});
 notificationDropDown.args = {
    button: [
        { 
            message: "Dat is following you!",
            photo: '',
            receiverId: "",
        },
        { 
            message: "Vu is following you!",
            photo: '',
            receiverId: "",
        },
        { 
            message: "Chau is following you!",
            photo: '',
            receiverId: "",
        },
        { 
            message: "An is following you!",
            photo: '',
            receiverId: "",
        },
        { 
            message: "Tung is following you!",
            photo: '',
            receiverId: "",
        },
        { 
            message: "Dat is following you!",
            photo: '',
            receiverId: "",
        },
        { 
            message: "Dat is following you!",
            photo: '',
            receiverId: "",
        },
        { 
            message: "Dat is following you!",
            photo: '',
            receiverId: "",
        },
        { 
            message: "Dat is following you!",
            photo: '',
            receiverId: "",
        },
        { 
            message: "Dat is following you!",
            photo: '',
            receiverId: "",
        },
    ]
};