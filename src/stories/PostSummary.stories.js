import React from 'react';
import testImage3 from '../images/testImage3.jpg'
import testImage4 from '../images/testImage4.jpg'

import PostSummary from '../components/post/PostSummary.jsx';

export default {
  title: 'Example/Post summary',
  component: PostSummary,
  
};

const Template  = (args) => (
    <PostSummary {...args} />
);

export const postSummary = Template.bind({});
postSummary.args = {
  post: { 
    title: 'This is a test post This is a test post This is a test post This is a test post',
    subtitle: 'This is a test post This is a test post This is a',
    author: 'Chaudeptrai213',
    view: 123123
  }
};


export const postSummaryWithImageAndUserAvatar = Template.bind({});
postSummaryWithImageAndUserAvatar.args = {
  post: { 
    title: "Fate/stay night: Heaven's Feel III is Comminggggggg !!!!!!!",
    subtitle: "The story continues immediately from the events of Fate/stay night: Heaven's Feel II. lost butterfly, and is the final installment in the Fate/stay night: Heaven's Feel trilogy.[1] It premiered in Japan on August 15, 2020 and is set to premiere in the United States on November 18, 2020.",
    author: 'Chaudeptrai213',
    view: 123123,
    avatar: testImage4,
    image: testImage3,
    tags: ['#health', '#anime', '#fantasy']
  },
};
