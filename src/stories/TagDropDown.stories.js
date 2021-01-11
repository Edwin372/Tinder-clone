import React from 'react'
import TagDropDown from '../components/dropdown/TagDropDown.jsx';


export default {
  title: 'TagDropDown',
  component: TagDropDown,
  
};

const Template  = (args) =><TagDropDown {...args} />;

export const tagDropDown = Template.bind({});
