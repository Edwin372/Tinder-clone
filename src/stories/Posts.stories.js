import React from 'react';
import Posts from '../components/post/Posts.jsx'

export default {
  title: ' Posts',
  component: Posts,
};

const Template = (args) => <Posts {...args} />;

export const posts = Template.bind({});
posts.args = {
    posts : [
        { 
            title: 'Title is one checkalabumbum chalaga',
            subtitle: 'Subtitle',
            view: 12434,
            like: 12
            
        }, {
            title: 'Title is one checkalabum',
            subtitle: 'Subtitle',
            view: 12434,
            like: 13
        },
        {
            title: 'Title is one checkalabumbum chalaga checkalabumbu ...',
            subtitle: 'Subtitle',
            view: 12434,
            like: 123
        },
        {
            title: 'Title is one checkalabumbum chalaga',
            subtitle: 'Subtitle',
            view: 12434,
            like: 12
        }
    ]
}
