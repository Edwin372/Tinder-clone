import React from 'react';
import testImage5 from '../images/testImage5.jpg'

import TopTrendingList from '../components/post/TopTrendingList.jsx'

export default {
  title: 'Example/Top Trending List',
  component: TopTrendingList,
  
};

const Template = (args) => <TopTrendingList {...args} />;

export const topTrendingList = Template.bind({});
topTrendingList.args = {
    posts : [
        { 
            title: "5 Types Of Coffee You Must Try, Úm ba la cà na xí muội",
            subtitle: "5 loại cà phê bao gồm Cà Na, Xí muội, Úm ba la xì bùa bla bla. Đọc đi mày sẽ thích ...",
            author: 'Tung',
            view: 12434,
            trending: 1,
            avatar: testImage5
        }, 
        {
            title: "5 Types Of Coffee You Must Try, Úm ba la cà na xí muội",
            subtitle: "5 loại cà phê bao gồm Cà Na, Xí muội, Úm ba la xì bùa bla bla. Đọc đi mày sẽ thích ...",
            author: 'Tung',
            view: 12434,
            trending: 2,
            avatar: testImage5
        },
        {
            title: "5 Types Of Coffee You Must Try, Úm ba la cà na xí muội",
            subtitle: "5 loại cà phê bao gồm Cà Na, Xí muội, Úm ba la xì bùa bla bla. Đọc đi mày sẽ thích ...",
            author: 'Tung',
            view: 12434,
            trending: 3,
            avatar: testImage5
        },
        {
            title: "5 Types Of Coffee You Must Try, Úm ba la cà na xí muội",
            subtitle: "5 loại cà phê bao gồm Cà Na, Xí muội, Úm ba la xì bùa bla bla. Đọc đi mày sẽ thích ...",
            author: 'Tung',
            view: 12434,
            trending: 4,
            avatar: testImage5
        },
        {
            title: "5 Types Of Coffee You Must Try, Úm ba la cà na xí muội",
            subtitle: "5 loại cà phê bao gồm Cà Na, Xí muội, Úm ba la xì bùa bla bla. Đọc đi mày sẽ thích ...",
            author: 'Tung',
            view: 12434,
            trending: 5,
            avatar: testImage5
        },
        {
            title: "5 Types Of Coffee You Must Try, Úm ba la cà na xí muội",
            subtitle: "5 loại cà phê bao gồm Cà Na, Xí muội, Úm ba la xì bùa bla bla. Đọc đi mày sẽ thích ...",
            author: 'Tung',
            view: 12434,
            trending: 6,
            avatar: testImage5
        },
        {
            title: "5 Types Of Coffee You Must Try, Úm ba la cà na xí muội",
            subtitle: "5 loại cà phê bao gồm Cà Na, Xí muội, Úm ba la xì bùa bla bla. Đọc đi mày sẽ thích ...",
            author: 'Tung',
            view: 12434,
            trending: 7,
            avatar: testImage5
        },
        {
            title: "5 Types Of Coffee You Must Try, Úm ba la cà na xí muội",
            subtitle: "5 loại cà phê bao gồm Cà Na, Xí muội, Úm ba la xì bùa bla bla. Đọc đi mày sẽ thích ...",
            author: 'Tung',
            view: 12434,
            trending: 8,
            avatar: testImage5
        }
    ]
}
