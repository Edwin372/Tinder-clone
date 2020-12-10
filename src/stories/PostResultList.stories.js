import React from 'react';
import testImage3 from '../images/testImage3.jpg'
import testImage4 from '../images/testImage4.jpg'
import testImage1 from '../images/testImage1.jpeg'
import testImage2 from '../images/testImage2.jpg'
import testImage from '../images/testImage.jpg'

import PostResultList from '../components/post/PostResultList.jsx'

export default {
  title: 'Example/Post result list',
  component: PostResultList,
  
};

const Template = (args) => <PostResultList {...args} />;

export const postResultList = Template.bind({});
postResultList.args = {
    posts : [
        { 
            title: "Fate/stay night: Heaven's Feel III is Comminggggggg !!!!!!!",
            subtitle: "The story continues immediately from the events of Fate/stay night: Heaven's Feel II. lost butterfly, and is the final installment in the Fate/stay night: Heaven's Feel trilogy.[1] It premiered in Japan on August 15, 2020 and is set to premiere in the United States on November 18, 2020.",
            author: 'Chaudeptrai213',
            view: 123123,
            avatar: testImage4,
            image: testImage3
        }, {
            title: "Fate/stay night: Heaven's Feel III is Comminggggggg !!!!!!!",
            subtitle: "The story continues immediately from the events of Fate/stay night: Heaven's Feel II. lost butterfly, and is the final installment in the Fate/stay night: Heaven's Feel trilogy.[1] It premiered in Japan on August 15, 2020 and is set to premiere in the United States on November 18, 2020.",
            author: 'Chaudeptrai213',
            view: 123123,
            avatar: testImage1,
            image: testImage
        },
        {
            title: "Fate/stay night: Heaven's Feel III is Comminggggggg !!!!!!!",
            subtitle: "The story continues immediately from the events of Fate/stay night: Heaven's Feel II. lost butterfly, and is the final installment in the Fate/stay night: Heaven's Feel trilogy.[1] It premiered in Japan on August 15, 2020 and is set to premiere in the United States on November 18, 2020.",
            author: 'Chaudeptrai213',
            view: 123123,
            avatar: testImage2,
            image: testImage1
        },
        {
            title: "Fate/stay night: Heaven's Feel III is Comminggggggg !!!!!!!",
            subtitle: "The story continues immediately from the events of Fate/stay night: Heaven's Feel II. lost butterfly, and is the final installment in the Fate/stay night: Heaven's Feel trilogy.[1] It premiered in Japan on August 15, 2020 and is set to premiere in the United States on November 18, 2020.",
            author: 'Chaudeptrai213',
            view: 123123,
            avatar: testImage1,
            image: testImage2
        },
        {
            title: "Fate/stay night: Heaven's Feel III is Comminggggggg !!!!!!!",
            subtitle: "The story continues immediately from the events of Fate/stay night: Heaven's Feel II. lost butterfly, and is the final installment in the Fate/stay night: Heaven's Feel trilogy.[1] It premiered in Japan on August 15, 2020 and is set to premiere in the United States on November 18, 2020.",
            author: 'Chaudeptrai213',
            view: 123123,
            avatar: testImage1,
            image: testImage2
        },
        {
            title: "Fate/stay night: Heaven's Feel III is Comminggggggg !!!!!!!",
            subtitle: "The story continues immediately from the events of Fate/stay night: Heaven's Feel II. lost butterfly, and is the final installment in the Fate/stay night: Heaven's Feel trilogy.[1] It premiered in Japan on August 15, 2020 and is set to premiere in the United States on November 18, 2020.",
            author: 'Chaudeptrai213',
            view: 123123,
            avatar: testImage1,
            image: testImage2
        }
        ,{
            title: "Fate/stay night: Heaven's Feel III is Comminggggggg !!!!!!!",
            subtitle: "The story continues immediately from the events of Fate/stay night: Heaven's Feel II. lost butterfly, and is the final installment in the Fate/stay night: Heaven's Feel trilogy.[1] It premiered in Japan on August 15, 2020 and is set to premiere in the United States on November 18, 2020.",
            author: 'Chaudeptrai213',
            view: 123123,
            avatar: testImage1,
            image: testImage2
        }
    ]
}
