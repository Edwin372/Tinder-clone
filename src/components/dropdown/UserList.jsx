import React, {useState } from 'react'
import { connect } from 'react-redux'
import User from './User'
import { Link } from 'react-router-dom'
import './UserList.scss'

const UserList=({posts}) =>{
    const [text,setText]=useState('See less');
    posts=posts.filter((item, index) => posts.indexOf(item) === index)
    let tempt = [];
    console.log(text);
    let icon; 
        if(text == 'See more')
        {
            icon ='+ ';
        }   
        else{
            icon ='';
        }
    if(text == 'See more' )
    {
        tempt = posts.slice(0,3);
    }
    else
    {
        tempt= posts;
    }
    return (
        <div className="UserListcontainer">
            <div className ="title">People</div>
            <div className = 'List'>
            {tempt.map(post => {
            return (
            <Link className="route-link">
                <User post={post} />
            </Link>
            )
           })}  
            </div>
            <button className="expand" onClick ={() => setText(text =='See less' ? 'See more' : 'See less')}>
            <span>
                <span className='icon'>{icon}</span>
                {text}
            </span>
            </button>
        </div>
    )
}

export default UserList





    