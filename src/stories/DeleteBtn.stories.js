import React from 'react'
import DeleteBtn from '../components/buttons/DeleteBtn'

export default{
    title:'delete button',
    component: DeleteBtn
};

const Template=(args) =><DeleteBtn{...args}/>
export const deleteBtn = Template.bind({});