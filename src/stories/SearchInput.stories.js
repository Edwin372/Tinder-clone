import React from 'react'
import SearchInput from '../components/search/SearchInput.jsx'
export default {
    title: "Search input",
    component: SearchInput,
  };
  
 const Template = (args) => <SearchInput {...args} />;
 export const searchInput = Template.bind({});