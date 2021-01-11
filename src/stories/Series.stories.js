import React from 'react'
import Series from '../components/post/Series.jsx'

export default {
    title: "Series",
    component: Series,
  };
  
 const Template = (args) => <Series {...args} />;
 
 export const series = Template.bind({});
 series.args = {
  series: [
  ]   
 };