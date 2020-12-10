import React, {useState } from 'react'
import { connect } from 'react-redux'
import User from './User'
import { Link } from 'react-router-dom'
import './UserList.scss'

const UserList=({posts}) =>{
    const [text,setText]=useState('+ See more');
    posts=posts.filter((item, index) => posts.indexOf(item) === index)
    let tempt = [];
    console.log(text);
    if(text == '+ See more' )
    {
        tempt = posts.slice(0,3);
    }
    else
    {
        tempt= posts;
    }
    return (
        <div className="container">
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
            <button className="expand" onClick ={() => setText(text =='+ See more' ? 'See less' : '+ See more')}>{text}</button>
        </div>
    )
}

export default UserList





    