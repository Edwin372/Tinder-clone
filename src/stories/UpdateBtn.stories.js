import React from 'react'
import UpdateBtn from '../components/buttons/UpdateBtn'

export default{
    title:'Update button',
    component: UpdateBtn
};

const Template=(args) =><UpdateBtn{...args}/>
export const updateBtn = Template.bind({});