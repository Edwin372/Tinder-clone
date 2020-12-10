import React from 'react';
import testImage5 from '../images/testImage5.jpg'
import TrendingPostSummary from '../components/post/TrendingPostSummary.jsx';

export default {
  title: ' Trending Post Summary',
  component: TrendingPostSummary,
  
};

const Template  = (args) => (
    <TrendingPostSummary {...args} />
);

export const trendingPostSummary = Template.bind({});
trendingPostSummary.args = {
  post: { 
    title: "5 Types Of Coffee You Must Try, Úm ba la cà na xí muội",
    subtitle: "5 loại cà phê bao gồm Cà Na, Xí muội, Úm ba la xì bùa bla bla. Đọc đi mày sẽ thích ...",
    author: 'Tung',
    view: 12434,
    trending: 1,
    avatar: testImage5
  },
};





